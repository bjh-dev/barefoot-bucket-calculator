import Form from '@/components/Form'

export default function Home() {
	return (
		<main className='container mx-auto'>
			<div className='flex flex-col py-12 lg:grid lg:grid-cols-2 lg:gap-x-24'>
				<div className='col-span-1'>
					<header className='py-6'>
						<h1 className='text-5xl font-extrabold text-gray-700'>
							The Barefoot Bucket Calculator
						</h1>
						<p className='mt-4 font-serif font-normal text-gray-500'>
							Calculate your bucket distributions based on your pay frequency.
							Check your actual spending against suggestions from the Barefoot
							Investor.
						</p>
					</header>
				</div>
				<div className='col-span-2'>
					<Form />
				</div>
			</div>
		</main>
	)
}
