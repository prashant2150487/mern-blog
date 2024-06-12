import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiUser, HiArrowSmRight, HiDocumentText } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';

const DashSidebar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');
    const dispatch = useDispatch();
    async function handleSignout() {
        try {
            const res = await fetch('/api/user/signout', {
                method: 'POST',
            })
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message)
            } else {
                dispatch(signoutSuccess());

            }

        } catch (error) {
            console.log(error.message)

        }
    }
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item
                            active={tab === 'profile'}
                            icon={HiUser}
                            label={'User'}
                            labelColor='dark'
                            as='div'
                        >
                            Profile
                        </Sidebar.Item>
                    </Link>
                    <Link to='/dashboard?tab=posts'>
                        <Sidebar.Item
                            active={tab === 'posts'}
                            icon={HiDocumentText}
                            as='div'
                        >
                            Posts
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer' onClick={handleSignout}>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashSidebar