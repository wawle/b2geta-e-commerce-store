'use client'
import { Popover, RadioGroup, Transition } from '@headlessui/react'
import { CurrencyEuroIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { currencyList } from '@/constants'



export default function CurrencySwitcher() {
    const [selected, setSelected] = useState(currencyList.find((item) => item.code === "EUR")?.code)
    const currencySign = currencyList.find((item) => item.code === selected)?.sign;


    return (
        <div className="w-full max-w-xs">
            <Popover className="relative">
                {({ open, close }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? 'text-slate-900' : 'text-gray-900'}
                group inline-flex items-center rounded-md border-1.5 border-slate-600 px-1 py-2 text-base font-medium hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                        >
                            <span className='text-lg'>
                                {currencySign}
                            </span>
                            {/* <CurrencyEuroIcon className='h-7 w-7' /> */}
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
                            <Popover.Panel className="absolute z-10 mt-3 -translate-x-1/2 transform px-0 w-screen max-w-[200px]">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                    <RadioGroup value={selected} onChange={setSelected}>
                                        <div className="">
                                            {currencyList.map((currency) => (
                                                <RadioGroup.Option
                                                    key={currency.code}
                                                    value={currency.code}
                                                    onClick={close}
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
                                                                <div className="flex items-center space-x-2">
                                                                    <div className="text-sm">
                                                                        <RadioGroup.Label
                                                                            as="p"
                                                                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                                                }`}
                                                                        >
                                                                            {currency.name}
                                                                        </RadioGroup.Label>

                                                                    </div>
                                                                    <div>
                                                                        {currency.sign}
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
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



