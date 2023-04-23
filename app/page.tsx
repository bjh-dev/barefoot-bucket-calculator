import Form from '@/components/Form'

export default function Home() {
	return (
		<main className='flex container mx-auto min-h-screen flex-col px-6 py-12 text-gray-700'>
			<div className='flex flex-col py-12 lg:grid lg:grid-cols-2 lg:gap-x-24'>
				<div className='col-span-2'>
					<header className='mb-12'>
						<h1 className='text-4xl font-extrabold'>
							The Barefoot Bucket Calculator
						</h1>
						<p className='mt-4 font-serif font-light text-gray-500'>
							A single purpose webpage to help you calculate your bucket
							destributions.
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
