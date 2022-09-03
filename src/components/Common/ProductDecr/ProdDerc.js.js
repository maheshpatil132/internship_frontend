
import { GrDocumentDownload } from 'react-icons/gr'
import img1 from '../../../images/image4.png'
import img2 from '../../../images/image5.png'
import img3 from '../../../images/image6.png'

function ProdDecr() {
	return (
		<>
			<div className="h-full w-10/12 ">

				<div className="px-20 py-14">

					{/* Path */}
					<p className="text-[#1672DE] mb-4">
						products &gt; Titanium Dioxide NR960
					</p>

					{/* Chemical Name */}
					<div className="flex">
						<div className="w-20 h-20 bg-black mr-5">
						</div>

						<div className="flex align-middle justify-center"><h1 className="my-auto text-2xl font-bold">TITANIUM DIOXIDE 960</h1></div>
					</div>

					{/* Technical Description */}
					<div className='mt-10'>
						<div className="flex">
							<div className="py-3 px-4 rounded prod_bag  w-1/4">
								<p className="font-xs">Substance</p>
								<h3 className="font-xl">Titanium Dioxide (Rutile)</h3>
							</div>
							<div className="py-3 mx-6 px-4 rounded prod_bag w-1/10">
								<p className="font-xs">Substance</p>
								<h3 className="font-xl">Name</h3>
							</div>
							<div className="py-3 px-4 rounded  prod_bag w-1/10">
								<p className="font-xs">Substance</p>
								<h3 className="font-xl">Name</h3>
							</div>
						</div>
						<div className="flex mt-6">
							<div className="py-3 px-4 prod_bag rounded w-1/4">
								<p className="font-xs">Substance</p>
								<h3 className="font-xl">Name</h3>
							</div>
							<div className="py-3 mx-6 px-4 rounded prod_bag w-1/10">
								<p className="font-xs">Substance</p>
								<h3 className="font-xl">Name</h3>
							</div>
							<div className="py-3 px-4 rounded prod_bag w-1/10">
								<p className="font-xs">Substance</p>
								<h3 className="font-xl">Name</h3>
							</div>
						</div>
					</div>

					{/* Documents */}
					<div className='mt-10'>
						<p className='font-semibold text-lg'>Documents</p>
						<div className="flex flex-wrap">
							<div className="flex items-center  mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
							<div className="flex items-center mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
							<div className="flex items-center mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
							<div className="flex items-center mt-4 mr-3 w-1/5 p-2 border rounded-md border-[#1E94DD]">
								<div className="w-1/3 flex justify-center align-middle">
									<GrDocumentDownload size={30} />
								</div>
								<div className="flex flex-col">
									<div className="w-1/2">abc.pdf</div>
									<div className="text-xs text-gray-600">24 Mb</div>
								</div>
							</div>
						</div>
					</div>

					{/* Product Description */}
					<div className="mt-12 text-sm">
						<h1 className="font-semibold text-xl">Product Description</h1>
						<p className="mt-2">Micronized titanium dioxide rutile via sulfate.</p>
						<p className="my-2 ">Key Features:</p>
						<ul className='list-disc px-2 list-inside space-y-1'>
							<li>High Gloss</li>
							<li>High whiteness with blue undertone</li>
							<li>Easy wetting and dispersing</li>
						</ul>
					</div>

					{/* Suppliers */}
					<div className="mt-12">
						<h1 className="font-semibold text-xl">Our Trusted Suppliers</h1>
						<div className="flex flex-wrap mt-2">
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img2} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img3} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img2} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img3} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>

                            <div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img2} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img3} alt="" />
							</div>
							<div className="w-1/5 mr-2 mb-2">
								<img src={img1} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProdDecr;
