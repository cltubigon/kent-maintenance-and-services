import React from 'react'
import ClientDashboard from './ClientDashboard'

export const metadata = {
  title: {
    default: `Dashboard`,
    template: `%s - Love Transfusion`,
  },
  // description: 'Generated by create next app',
}

const DashboardPage = async () => {
  return <ClientDashboard />
}

export default DashboardPage