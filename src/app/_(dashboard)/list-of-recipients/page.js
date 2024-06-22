import { createServer } from '@/config/supabase/supabaseServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hugs from './Hugs'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import Button from '@/app/components/Button'

const ListOfRecipientsPage = async () => {
  const user = await getCurrentUser()
  console.log('user', user)
  const supabase = createServer()
  const { data: recipients, error } = await supabase
    .from('recipients')
    .select(
      'id, hugs, first_name, condition, profile_picture, path_url, created_at'
    )
  console.log('recipients', recipients)
  return (
    <div className={'w-full'}>
      <div className={'flex justify-between min-h-9'}>
        <h2 className={'text-xl font-semibold text-primary'}>Recipients</h2>
        {(user?.role === 'superadmin' || user?.role === 'admin') && (
          <Link href={'/add-new-recipient'}>
            <Button>Add New</Button>
          </Link>
        )}
      </div>

      <div className={'overflow-x-scroll md:overflow-auto'}>
        <table className="table-auto w-full my-6">
          <thead>
            <tr className="text-left bg-primary-300 rounded-full border-b-2 border-primary-400 text-white">
              <th className="px-3 py-3"></th>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Number of hugs</th>
              <th className="px-3 py-3">Date Added</th>
              <th className="px-3 py-3">Condition</th>
              {(user?.role === 'superadmin' || user?.role === 'admin') && (
                <th className="px-3 py-3">Admin Tools</th>
              )}
            </tr>
          </thead>
          <tbody>
            {recipients
              ?.sort((a, b) => {
                const dateA = new Date(a?.created_at)
                const dateB = new Date(b?.created_at)
                return dateB - dateA
              })
              ?.map((recipient, index) => {
                const {
                  id,
                  hugs,
                  first_name,
                  condition,
                  profile_picture,
                  path_url,
                  created_at,
                } = recipient
                return (
                  <tr key={index} className="even:bg-primary-50">
                    <td className="w-[190px]">
                      <Link href={`/recipients/${path_url}`}>
                        <Image
                          width={150}
                          height={150}
                          quality={100}
                          src={profile_picture?.url}
                          alt="profile picture of the recipient"
                          className="min-w-[100px] md:min-w-[150px]"
                        />
                      </Link>
                    </td>
                    <td className={'px-3 py-3'}>
                      <Link href={`/recipients/${path_url}`}>{first_name}</Link>
                    </td>
                    <td className={'px-3 py-3'}>
                      <Hugs parameters={{ hugs, id, path_url }} />
                    </td>
                    <td className={'px-3 py-3'}>
                      {new Date(created_at).toLocaleDateString()}
                    </td>
                    <td className={'px-3 py-3'}>{condition}</td>
                    {(user?.role === 'superadmin' ||
                      user?.role === 'admin') && (
                      <td className={'px-3 py-3'}>Edit</td>
                    )}
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListOfRecipientsPage
