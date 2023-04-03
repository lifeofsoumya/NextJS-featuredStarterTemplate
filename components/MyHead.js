import Head from 'next/head'

export default function MyHead({ title, description, image, url }) {
    return (
        <Head>
            <title>{`${title} | My Site`}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} key="title" />
            <meta property="og:description" content={description} key="description" />
            <meta property="og:image" content={image} key="image" />
            <meta property="og:url" content={url} key="url" />
            <link rel="icon" href="/images/favicon.ico" />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}