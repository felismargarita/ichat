import React from 'react'
import Layout from '@/components/layout/Layout'
import '@/style/style.scss'
import SideBar from '@/components/layout/side/SideBar'
import MiddleBar from '@/components/layout/middle/MiddleBar'
import RightBar from '@/components/layout/right/RightBar'

export default function IndexPage() {
  return (
    <div>
      <Layout
      sideBar={<SideBar/>}
      middleBar={<MiddleBar/>}
      rightBar={<RightBar/>}
      />
    </div>
  );
}
