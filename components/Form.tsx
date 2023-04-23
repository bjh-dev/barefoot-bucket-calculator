'use client'

import { useState } from 'react'

const buckets = [
	{
		id: 1,
		title: 'Account 1: Daily Expenses',
		description:
			'An everyday transaction account with a debit card that gets 60% of your income. Use this account to pay for your regular daily expenses like rent, utilities, regular bills and groceries. The trick here is to keep all your expenses under 60% of your income.',
		percentage: 60,
	},
	{
		id: 2,
		title: 'Account 2: Splurge',
		description:
			'An everyday transaction account with a debit card that gets 10% of your income. This is your account for fun purchases and social activities. Use it for social meet ups, nights out to the movies or save it up to buy a new pair of shoes.',
		percentage: 10,
	},
	{
		id: 3,
		title: 'Account 3: Smile',
		description:
			'An online account that gets 10% of your income. This is a long-term savings account for big purchase goals such as a holiday, new computer or updating your car.',
		percentage: 10,
	},
	{
		id: 4,
		title: 'Account 4: Fire Extinguisher',
		description:
			'An online account that gets 20% of your income. This money is for fighting financial fires like any existing debt or bigger non-regular bills such as repairs and maintenance. Money does not sit in this account. It moves through on its way to paying the bills you have. If there are no debts or bills to pay, the money spills over to the Mojo bucket.',
		percentage: 20,
	},
]

const budgetItems = [
	{
		id: 1,
		item: 'Housing',
		percentage: 30,
	},
	{
		id: 2,
		item: 'Utilities',
		percentage: 10,
	},
	{
		id: 3,
		item: 'Transport',
		percentage: 5,
	},
	{
		id: 4,
		item: 'Insurance',
		percentage: 5,
	},
	{
		id: 5,
		item: 'Groceries',
		percentage: 10,
	},
]

const percentageCalculate = (income: number, percentage: number) => {
	return income * (percentage / 100)
}

const Form = () => {
	const [income, setIncome] = useState(0)
	const handleIncomeInput = (e: any) => {
		if (e.key === '.') {
			e.preventDefault()
			setIncome(e.target.value)
		}
	}
	const handleChange = (e: any) => {
		setIncome(e.target.value)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		setIncome(0)
	}
	console.log('income: ', income)
	return (
		<>
			<div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-24 '>
				<div className='col-span-2'>
					<div className='max-w-2xl'>
						<form onSubmit={handleSubmit}>
							<label
								htmlFor='email'
								className='mb-2 block font-medium leading-6 text-gray-700'
							>
								Enter Your Monthly Take-Home Pay:
							</label>
							<div className='relative mt-2 rounded-md shadow-sm'>
								<div className='flex pointer-events-none absolute inset-y-0 left-0 items-center pl-3'>
									<span className='text-lg text-gray-500'>$</span>
								</div>
								<input
									type='number'
									min={1}
									step={1}
									name='price'
									id='price'
									onChange={handleChange}
									value={income ? income : ''}
									onKeyDown={handleIncomeInput}
									className='block w-full rounded-md border-0 bg-gray-100 py-4 pl-7 pr-12 text-3xl font-bold  text-blue-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:leading-6'
									placeholder=''
									aria-describedby='price-currency'
								/>
								<div className='flex pointer-events-none absolute inset-y-0 right-0 items-center pr-3'>
									<span className='text-lg text-gray-500' id='price-currency'>
										AUD
									</span>
								</div>
							</div>
							<div className='flex mt-6 items-center justify-end gap-x-6'>
								<button
									type='submit'
									className='rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
								>
									Clear
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className='col-span-1 mt-6 lg:mt-24'>
					<div className='flex flex-col space-y-2 lg:space-y-6'>
						{buckets.map((bucket) => (
							<div
								key={bucket.id}
								className='rounded-lg border border-gray-400 bg-gray-200 p-4'
							>
								<div className='flex justify-between space-x-12 text-base font-bold'>
									<h3 className='flex flex-col items-center  lg:flex-row lg:text-lg'>
										{bucket.title}
									</h3>
									<h4 className='text-gray-400'>
										{income > 0 ? (
											<span className='text-blue-700'>
												$
												{percentageCalculate(income, bucket.percentage).toFixed(
													2
												)}
											</span>
										) : (
											''
										)}
									</h4>
								</div>
								<p className='mt-2 hidden text-sm'>{bucket.description}</p>
								<div></div>
							</div>
						))}
					</div>
				</div>
				<div className='col-span-1 mt-6 lg:mt-24'>
					<div className='rounded-lg border border-gray-400 bg-gray-200 p-6'>
						<h3 className='text-2xl font-bold text-gray-700'>Budget Items</h3>
						<p className='mt-2 text-sm'>
							Here is a very loose sketch of what your budget might look like
							using the 60% allocation in your daily expenses account. Use the
							percentages as a guide to assess whether you might be
							under-spending or over-spenign in a catagory
						</p>
						<div className='overflow-x-scroll'>
							<table className='table-fluid mt-6 w-full'>
								<thead className='bg-gray-300 text-left'>
									<tr>
										<th className='whitespace-nowrap py-2 pr-2 text-sm'>%</th>
										<th className='whitespace-nowrap py-2 pr-2 text-sm'>
											Category
										</th>
										<th className='whitespace-nowrap py-2 pr-2 text-sm'>
											Amount
										</th>
									</tr>
								</thead>
								<tbody>
									{budgetItems.map((item) => (
										<tr key={item.id} className='border-b border-gray-400 py-6'>
											<td className='whitespace-nowrap py-2 pr-2 text-sm'>
												{item.percentage}%
											</td>
											<td className='whitespace-nowrap py-2 pr-2 text-sm'>
												{item.item}
											</td>
											<td className='whitespace-nowrap py-2 pr-2 text-sm'>
												{income > 0 ? (
													<span className='text-rose-700'>
														$
														{percentageCalculate(
															income,
															item.percentage
														).toFixed(2)}
													</span>
												) : (
													<span className='text-gray-400'>$0.00</span>
												)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Form
