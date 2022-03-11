import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'
import useFirebase from '../../../hooks/useFirebase';

const AdminDashboard = () => {
    const { admin } = useFirebase()
    return (
        <div className='dashboard'>
            <Row>
                <Col md={2}>
                    <div className="dashboard-menu shadow px-3 py-4">
                        <div className="logo mb-4">
                            <h4>Admin Panel</h4>
                        </div>
                        <ul>
                            <li>
                                <NavLink to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaBookmark className='me-1' /> Manage Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-blogs`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaCommentDots className='me-1' /> Manage Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-books`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaTasks className='me-1' /> Manage Books</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-syllabus`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaTasks className='me-1' /> Manage Syllabus</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-notes`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaUserShield className='me-1' /> Manage Notes</NavLink>
                            </li>
                            <li>
                                <NavLink to={`make-admin`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaUser className='me-1' /> Make Admin</NavLink>
                            </li>

                            <li className='dashboard-logOut'>
                                <FaSignOutAlt className='me-1' /> Log Out
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col md={10} className='px-5 py-5'>
                    <Outlet />
                </Col>
            </Row>
        </div >
    );
};

export default AdminDashboard;