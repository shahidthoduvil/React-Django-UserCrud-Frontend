import React from 'react'
import AdminPanel from '../admin/AdminPanel'
import AdminSidebar from '../admin/AdminSidebar'
import Navbar from '../navbar/Navbar'
import Navbar2 from '../navbar/Navbar2'


function AdminPanelPage() {
  return (
    <div>
    <Navbar2/>
   <AdminPanel/>
   <AdminSidebar/>

    </div>
  )
}

export default AdminPanelPage