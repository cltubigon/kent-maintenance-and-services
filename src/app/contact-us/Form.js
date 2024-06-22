'use client'
import React, { useState } from 'react'
import Input from '../components/inputsFields/InputGroup/Input'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import { sendEmail } from './actions'
import Icon_spinner from '../components/icons/Icon_spinner'

const Form = () => {
  const { register, handleSubmit, reset, formState } = useForm()
  const [emailSent, setemailSent] = useState(false)
  const [loading, setloading] = useState(false)

  const { errors } = formState

  const submitData = async () => {
    setloading(true)
    const timeout = setTimeout(() => {
      setloading(false)
      setemailSent(true)
    }, 1500)

    return () => clearTimeout(timeout)
  }

  const onSubmit = async (data) => {
    reset()
    // if (data.are_you_a_bot) {
    //   console.log('do not submit data')
    // } else {
    //   if (emailSent) return
    //   await submitData()
    //   await sendEmail({ data })
    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'flex flex-col gap-4'}>
          <div className={''}>
            <label htmlFor="firstName" className="text-paragraph">
              Name
            </label>
            <div className={'flex flex-col md:flex-row gap-4 mt-2'}>
              <Input
                error={errors?.firstName?.message}
                id="firstName"
                placeholder="First name *"
                {...register('firstName', {
                  required: 'Enter first name',
                })}
              />
              <Input
                error={errors?.lastName?.message}
                id="lastName"
                placeholder="Last name *"
                {...register('lastName', {
                  required: 'Enter last name',
                })}
              />
            </div>
          </div>
          <Input
            error={errors?.phoneNumber?.message}
            id="phoneNumber"
            type="number"
            placeholder="Phone number *"
            {...register('phoneNumber', {
              required: 'Enter phone number',
              pattern: {
                value: /^\+?(\d.*){3,}$/,
                message: 'Enter a valid phone number',
              },
            })}
          />
          <Input
            error={errors?.email?.message}
            id="email"
            placeholder="Your email *"
            {...register('email', {
              required: 'Enter your email address',
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+$/i,
                message: 'Please enter a valid email',
              },
            })}
          />
          <Input
            error={errors?.postCode?.message}
            id="postCode"
            placeholder="Post code *"
            {...register('postCode', {
              required: 'Enter post code',
            })}
          />
          <Input
            id="are_you_a_bot"
            className="hidden"
            {...register('are_you_a_bot')}
          />
          <Button type="submit" className="w-full" disabled={emailSent && true}>
            <p className={'relative w-fit'}>
              {emailSent
                ? 'Thank you, we received your details'
                : 'Get Your Free Quote Now'}{' '}
              {loading && (
                <Icon_spinner className="absolute -right-8 top-0 bottom-0 my-auto animate-spin" />
              )}
            </p>
          </Button>
        </div>
      </form>
    </>
  )
}

export default Form
