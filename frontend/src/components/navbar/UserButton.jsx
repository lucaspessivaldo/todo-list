import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MdLogout } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'

export default function UserButton({ onLogout, username }) {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className='trigger'>
          <FaUserCircle className='navbar-user-picture' />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className='dropdownmenu-content'>
          <p className='dropdowmenu-username'>name: {username}</p>
          <DropdownMenu.Item
            className='dropdownmenu-items'
            onClick={() => onLogout()}
          >
            Logout
            <MdLogout />
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className='arrow' />
        </DropdownMenu.Content>

      </DropdownMenu.Root>
    </div>
  )
}
