import Form from '@/components/Form'

export default function Home() {
	return (
		<main className='flex container mx-auto min-h-screen flex-col py-12 text-gray-700'>
			<div className='grid grid-cols-2 gap-x-24 py-24'>
				<div className='col-span-2'>
					<header className='mb-12'>
						<h1 className='text-6xl font-extrabold'>
							The Barefoot Bucket Calculator
						</h1>
						<p className='mt-6 font-serif text-lg font-light text-gray-500'>
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
