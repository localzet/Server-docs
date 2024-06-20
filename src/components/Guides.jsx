import {Button} from '@/components/Button'
import {Heading} from '@/components/Heading'

const guides = [
    {
        href: '/guides/timer',
        name: 'Таймер и управление временем',
        description: 'Таймер позволяет выполнять фрагменты кода с задержкой или по расписанию.',
    },
    {
        href: '/guides/session',
        name: 'Управление сессиями',
        description: 'Получайте и изменяйте данные сессии. Храните её там, где вам удобно.',
    },
    {
        href: '/guides/sse',
        name: 'Server-Sent Events',
        description: 'Отправляйте события клиентам в JavaScript, как через WebSocket, но намного проще.',
    },
    {
        href: '/guides/debug',
        name: 'Отладка',
        description: 'Отлаживайте запущенные процессы, отслеживайте события и состояние сервера.',
    },
]

export function Guides() {
    return (
        <div className="my-16 xl:max-w-none">
            <Heading level={2} id="guides">
                Гайды
            </Heading>
            <div
                className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
                {guides.map((guide) => (
                    <div key={guide.href}>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {guide.name}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            {guide.description}
                        </p>
                        <p className="mt-4">
                            <Button href={guide.href} variant="text" arrow="right">
                                Подробнее
                            </Button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
