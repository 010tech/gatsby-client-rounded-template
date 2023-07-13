import React from "react"
import { Button } from "../components/Button"
import Layout from "../components/Layout"
import Link from "../components/Link"

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center py-24 sm:py-32">
      <h1 className="text-8xl sm:text-9xl font-outfit leading-tight tracking-[4.8px] sm:tracking-[6.4px] font-black text-white shadowed-logo">
        404
      </h1>
      <p className="text-xl sm:text-2xl leading-normal tracking-wide mt-6">
        頁面不存在或維護中
      </p>
      <div className="mt-12">
        <Link to="/">
          <Button size="md">回首頁</Button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
