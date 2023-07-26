
import z from 'zod'

import { Params, breadcrumbSchema } from './params'
import { Response } from 'express'
import { getTexts } from './server'

const breadcrumbsSchema = z.object({
    breadcrumbs: z.array(breadcrumbSchema).default([]),
})

type Breadcrumbs = z.infer<typeof breadcrumbsSchema>

type Footer = {
    simple: boolean;
    innlogget: boolean;
}

type Texts = Awaited<ReturnType<typeof getTexts>>
type RenderParams = Params & Texts


export function GetComponents (res: Response, params: Params) {
    return {
        Index: async (hello: string) => {
            return res.render('index', {
                simple: params.simple,
                lang: { [params.language]: true },
                breadcrumbs: params.breadcrumbs.map((b, i, a) => ({
                    ...b,
                    last: a.length - 1 === i,
                })),
                ...(await getTexts(params))
            })
        },
        Breadcrumbs: (breadcrumbs: Breadcrumbs) => {
            return res.render('breadcrumbs', breadcrumbs)
        },
        Header: (header: Footer) => {
            return res.render('header', header)
        },
        HeaderMenuLinks: async () => {
            return res.render('header-menu-links', {
                simple: params.simple,
                innlogget: false,
                ...(await getTexts(params)),
            })
        },
        Footer: (footer: Footer) => {
            return res.render('footer', footer)
        }
    }

}