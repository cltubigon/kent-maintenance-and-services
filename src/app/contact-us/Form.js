'use client'
import React from 'react'
import Input from '../components/inputsFields/InputGroup/Input'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import { sendEmail } from './actions'

const Form = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const onSubmit = (data) => {
    if (data.are_you_a_bot) {
      console.log('do not submit data', data)
    } else {
      console.log('submit data', data)
      sendEmail()
    }
  }
  console.log('errors', errors)
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
          <Button type="submit" className="w-full">
            Get Your Free Quote Now
          </Button>
        </div>
      </form>
    </>
  )
}

export default Form
