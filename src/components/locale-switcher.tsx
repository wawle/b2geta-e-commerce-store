'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n/config'
import { Popover, RadioGroup, Transition } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'



export default function LocaleSwitcher() {
    const pathName = usePathname()
    const params = useParams();
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    const [selected, setSelected] = useState(params.lang || i18n.locales[0])

    return (
        <div className="w-full max-w-sm">
            <Popover className="relative">
                {({ open, }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? 'text-slate-900' : 'text-gray-900'}
                group inline-flex items-center rounded-md border-1.5 border-slate-600 px-2 py-1 text-base font-medium hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                        >
                            <LanguageIcon className='h-6 w-6' />

                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 -translate-x-1/2 transform px-4 sm:px-0">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">

                                    <RadioGroup value={selected} onChange={setSelected}>
                                        <div className="">
                                            {i18n.locales.map((locale) => (
                                                <Link href={redirectedPathName(locale)} key={locale}>
                                                    <RadioGroup.Option
                                                        key={locale}
                                                        value={locale}
                                                        className={({ active, checked }) =>
                                                            `${active
                                                                ? 'ring-2 ring-white/60 ring-offset-2 '
                                                                : ''
                                                            }
                  ${checked ? 'bg-black text-white' : 'bg-white'}
                    relative flex cursor-pointer px-5 py-4 shadow-md focus:outline-none`
                                                        }
                                                    >
                                                        {({ active, checked }) => (
                                                            <>
                                                                <div className="flex w-full items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <div className="text-sm">
                                                                            <RadioGroup.Label
                                                                                as="p"
                                                                                className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                                                    }`}
                                                                            >
                                                                                {locale.toUpperCase()}
                                                                            </RadioGroup.Label>

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </>
                                                        )}
                                                    </RadioGroup.Option>
                                                </Link>
                                            ))}
                                        </div>
                                    </RadioGroup>

                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )

}



