import React from "react";

function SignUpInfo({ formData, setFormData }) {
	return (
		<div className="flex flex-col justify-center">
			<input type="number" placeholder="Enter Your Full Name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />
			
			<div className="flex">
				<input type="number" placeholder="Enter Your Mobile Number" value={formData.mobile} onChange={(event) => setFormData({ ...formData, mobile: event.target.value })} className='py-2 px-4 rounded-md border w-3/5 my-2 ml-[86px]' />

				<div className="m-auto">
					<button className="bg-[#004AA1] rounded-md text-white py-1 w-[80px]">Send Otp</button>
				</div>
			</div>

			<input type="number" placeholder="Enter OTP" value={formData.otp} onChange={(event) => setFormData({ ...formData, otp: event.target.value })} className='py-2 px-4 rounded-md border w-3/5 my-2 mx-auto' />
		</div>
	);
}

export default SignUpInfo;
