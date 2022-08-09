import { useEffect } from 'react'
import Router, { NextRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { restorePageActions } from '../store/restorePage'

export function useScrollRestoration(router: NextRouter) {
    const dispatch = useDispatch()
    useEffect(() => {
        if (!('scrollRestoration' in window.history)) return
        let shouldScrollRestore = false
        window.history.scrollRestoration = 'manual'
        

        const onBeforeUnload = (event: BeforeUnloadEvent) => {
            delete event['returnValue']
        }

        const onRouteChangeStart = () => {}

        const onRouteChangeComplete = (url: string) => {
            if (shouldScrollRestore) {
                shouldScrollRestore = false

                dispatch(restorePageActions.setRestorePage(url))
            }
        }

        window.addEventListener('beforeunload', onBeforeUnload)
        Router.events.on('routeChangeStart', onRouteChangeStart)
        Router.events.on('routeChangeComplete', onRouteChangeComplete)
        Router.beforePopState(() => {
            shouldScrollRestore = true
            return true
        })

        return () => {
            window.removeEventListener('beforeunload', onBeforeUnload)
            Router.events.off('routeChangeStart', onRouteChangeStart)
            Router.events.off('routeChangeComplete', onRouteChangeComplete)
            Router.beforePopState(() => true)
        }
    }, [router])
}