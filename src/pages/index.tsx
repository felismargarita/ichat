import React from 'react'
import Layout from '@/components/layout/Layout'
import '@/style/style.scss'
import SideBar from '@/components/layout/side/SideBar'
import MiddleBar from '@/components/layout/middle/MiddleBar'
import RightBar from '@/components/layout/right/RightBar'
import Link from '@/components/button/Link'
import GitHub from '@/assets/icons/GitHub.svg'
export default function IndexPage() {
  return (
    <div className="index-page">
      <Layout
      sideBar={<SideBar/>}
      middleBar={<MiddleBar/>}
      rightBar={<RightBar/>}
      />
      <Link link="https://github.com/felismargarita/ichat" icon={GitHub}/>
    </div>
  );
}
