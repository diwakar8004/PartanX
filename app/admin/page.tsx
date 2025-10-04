"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Unlock,
  Lock as LockIcon,
  UserPlus,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";

const ROLES = ["admin", "user", "guest"];
const DEFAULT_FIELDS = ["id", "name", "email", "role", "locked", "registered", "password", "2fa"];

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  locked: boolean;
  registered: string;
  password: string;
  "2fa": boolean;
};

type Submission = {
  id: number;
  type: string;
  [key: string]: any;
};

export default function AdminPanel() {
  const [users, setUsers] = useState<User[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterLocked, setFilterLocked] = useState("");

  const [page, setPage] = useState(1);
  const USERS_PER_PAGE = 5;

  const [showPasswords, setShowPasswords] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  // New user form state
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("user");
  const [new2FA, setNew2FA] = useState(false);

  // Toast notification ref
  const toastRef = useRef<HTMLDivElement>(null);

  // Load initial data from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      const storedSubs = JSON.parse(localStorage.getItem("submissions") || "[]");
      setUsers(storedUsers);
      setSubmissions(storedSubs);
    }
  }, []);

  // Save users and submissions on change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("registeredUsers", JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("submissions", JSON.stringify(submissions));
    }
  }, [submissions]);

  // Utility for showing toast notifications
  const showToast = (message: string) => {
    if (toastRef.current) {
      toastRef.current.innerText = message;
      toastRef.current.style.display = "block";
      setTimeout(() => {
        if (toastRef.current) toastRef.current.style.display = "none";
      }, 3000);
    }
  };

  // Delete user handler
  const handleDeleteUser = (id: number) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    showToast(`User ID ${id} deleted`);
  };

  // Delete submission handler
  const handleDeleteSubmission = (id: number) => {
    setSubmissions(prev => prev.filter(s => s.id !== id));
    showToast(`Submission ID ${id} deleted`);
  };

  // Lock/unlock toggle
  const toggleLockUser = (id: number) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, locked: !u.locked } : u));
    showToast(`User ID ${id} lock toggled`);
  };

  // Add new user handler
  const handleAddUser = () => {
    if (!newName || !newEmail || !newPassword) {
      alert("Name, Email and Password are required");
      return;
    }
    const newUser: User = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      password: newPassword,
      role: newRole,
      locked: false,
      registered: new Date().toLocaleDateString(),
      "2fa": new2FA,
    };
    setUsers(prev => [...prev, newUser]);
    setNewName("");
    setNewEmail("");
    setNewPassword("");
    setNewRole("user");
    setNew2FA(false);
    setShowAddUser(false);
    showToast("New user added");
  };

  // Filtering users
  const filteredUsers = users.filter(u => {
    if (search) {
      const searchLower = search.toLowerCase();
      if (!u.name.toLowerCase().includes(searchLower) && !u.email.toLowerCase().includes(searchLower)) return false;
    }
    if (filterRole && u.role !== filterRole) return false;
    if (filterLocked) {
      if (filterLocked === "locked" && !u.locked) return false;
      if (filterLocked === "unlocked" && u.locked) return false;
    }
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice((page - 1) * USERS_PER_PAGE, page * USERS_PER_PAGE);

  // Toggle password visibility
  const toggleShowPasswords = () => setShowPasswords(s => !s);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Toast Notification */}
      <div
        ref={toastRef}
        className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
        style={{ display: "none" }}
      >
        Notification
      </div>

      {/* Header and Add User Button */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <Button onClick={() => setShowAddUser(true)} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
          <UserPlus size={20} /> Add User
        </Button>
      </header>

      {/* Search and Filters */}
      <section className="mb-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded flex-grow min-w-[200px]"
        />

        <select
          value={filterRole}
          onChange={e => setFilterRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Roles</option>
          {ROLES.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>

        <select
          value={filterLocked}
          onChange={e => setFilterLocked(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Lock Status</option>
          <option value="locked">Locked</option>
          <option value="unlocked">Unlocked</option>
        </select>

        <Button
          onClick={toggleShowPasswords}
          variant="outline"
          className="flex items-center gap-2"
        >
          {showPasswords ? <EyeOff size={16} /> : <Eye size={16} />}
          {showPasswords ? "Hide Passwords" : "Show Passwords"}
        </Button>
      </section>

      {/* Registered Users List */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>

        {paginatedUsers.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div className="space-y-4">
            {paginatedUsers.map(user => (
              <div
                key={user.id}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded bg-white shadow-sm"
              >
                <div className="flex flex-wrap gap-4 flex-grow">
                  <div><strong>ID:</strong> {user.id}</div>
                  <div><strong>Name:</strong> {user.name}</div>
                  <div><strong>Email:</strong> {user.email}</div>
                  <div><strong>Role:</strong> {user.role}</div>
                  <div>
                    <strong>Locked:</strong> {user.locked ? "Yes" : "No"}
                  </div>
                  <div><strong>Registered:</strong> {user.registered}</div>
                  <div>
                    <strong>Password:</strong>{" "}
                    {showPasswords ? user.password : "••••••••"}
                  </div>
                  <div><strong>2FA:</strong> {user["2fa"] ? "Enabled" : "Disabled"}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button
                    variant="destructive"
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Trash2 size={16} /> Delete
                  </Button>

                  <Button
                    onClick={() => toggleLockUser(user.id)}
                    className={`${
                      user.locked ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
                    } text-white flex items-center gap-1 px-3 py-1 rounded`}
                  >
                    {user.locked ? <Unlock size={16} /> : <LockIcon size={16} />}
                    {user.locked ? "Unlock" : "Lock"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-3">
            <Button
              disabled={page <= 1}
              onClick={() => setPage(p => Math.max(p - 1, 1))}
            >
              Previous
            </Button>
            <span className="flex items-center px-3">{page} / {totalPages}</span>
            <Button
              disabled={page >= totalPages}
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            >
              Next
            </Button>
          </div>
        )}
      </section>

      {/* Submissions Sections */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Submissions</h2>

        {["Job Application", "Request Proposal", "Book a Call"].map(type => {
          const filteredSubs = submissions.filter(s => s.type === type);
          return (
            <div key={type} className="mb-8">
              <h3 className="text-xl font-semibold mb-3">{type}s</h3>
              {filteredSubs.length === 0 ? (
                <p>No {type.toLowerCase()}s found.</p>
              ) : (
                <div className="space-y-4">
                  {filteredSubs.map(sub => (
                    <div
                      key={sub.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded bg-white shadow-sm"
                    >
                      <div className="flex flex-col gap-2 flex-grow">
                        <h1 style={{color: 'red', fontSize: '2rem', fontWeight: 'bold'}}>TEST RENDER</h1>
                        {/* Render request details as before */}
                        {Object.entries(sub).map(([k, v]) => (
                          k !== "id" && (
                            <div key={k}>
                              <strong>{k}:</strong> {String(v)}
                            </div>
                          )
                        ))}
                      </div>
                      {/* Action Buttons for request */}
                      <div className="flex gap-2 mt-4 md:mt-0">
                        <Button
                          variant="destructive"
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => handleDeleteSubmission(sub.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-red-600 text-red-600 hover:bg-red-50"
                          onClick={() => alert('Force Delete pressed for request ID ' + sub.id)}
                        >
                          Force Delete
                        </Button>
                        <button
                          style={{ background: 'yellow', color: 'black', padding: '8px', borderRadius: '4px', border: '2px solid orange', fontWeight: 'bold' }}
                          onClick={() => alert('DEBUG BUTTON clicked for request ID ' + sub.id)}
                        >
                          DEBUG BUTTON
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="border p-2 rounded"
              />
              <select
                value={newRole}
                onChange={e => setNewRole(e.target.value)}
                className="border p-2 rounded"
              >
                {ROLES.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>

              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={new2FA}
                  onChange={e => setNew2FA(e.target.checked)}
                  className="form-checkbox"
                />
                Enable 2FA
              </label>

              <div className="flex justify-end gap-3 mt-4">
                <Button variant="outline" onClick={() => setShowAddUser(false)}>Cancel</Button>
                <Button onClick={handleAddUser} className="bg-green-600 hover:bg-green-700">
                  Add User
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
