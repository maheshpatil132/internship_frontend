import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import './App.css';

function Contact({ setShowModal }) {
	return (
		<>
			<div className="mt-6">
				<button onClick={() => { setShowModal('contact') }} className='text-white bg-[#1672DE] px-3 py-2 text-lg font-medium rounded-md'><AddCircleOutlineIcon className='mr-1 mb-1' fontSize='small' />Contacts</button>

				<div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
					<div className="flex justify-between">
						<h1>Contacts (1)</h1>
						<p><MoreVertIcon /></p>
					</div>

					<div className="flex w-11/12 mt-3 p-1">
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Name</p>
							<p>Pranav</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Role</p>
							<p>Sales Person</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
							<p>9861657330</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Email ID</p>
							<p>asb@gmail.com</p>
						</div>
					</div>
				</div>

				<div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
					<div className="flex justify-between">
						<h1>Contacts (2)</h1>
						<p><MoreVertIcon /></p>
					</div>

					<div className="flex w-11/12 mt-3 p-1">
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Name</p>
							<p>Pranav</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Role</p>
							<p>Sales Person</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
							<p>9861657330</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Email ID</p>
							<p>asb@gmail.com</p>
						</div>
					</div>
				</div>

				<div className="mt-5 rounded-md box_shadow bg-white p-3 box_shadow">
					<div className="flex justify-between">
						<h1>Contacts (3)</h1>
						<p><MoreVertIcon /></p>
					</div>

					<div className="flex w-11/12 mt-3 p-1">
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Name</p>
							<p>Pranav</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Role</p>
							<p>Sales Person</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Mobile Number</p>
							<p>9861657330</p>
						</div>
						<div className="flex flex-col w-1/4">
							<p className="text-[#637F94] text-sm font-medium">Email ID</p>
							<p>asb@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;