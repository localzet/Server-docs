import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  let router = useRouter()

  return (
    <>
        <Head>
            {router.pathname === '/' ? (
                <title>Localzet Documentation</title>
            ) : (
                <title>{`${pageProps.title} - Localzet Server`}</title>
            )}
            <meta name="description" content={pageProps.description}/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"/>

        </Head>
        <MDXProvider components={mdxComponents}>
            <Layout {...pageProps}>
                <Component {...pageProps} />
            </Layout>
        </MDXProvider>
    </>
  )
}
