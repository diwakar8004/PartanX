"use client"
"use client"
// Helper to show ordinal numbers (1st, 2nd, 3rd, ...)
function ordinal(n: number) {
  var v = n % 100;
  if (v >= 11 && v <= 13) return n + "th";
  if (v % 10 === 1) return n + "st";
  if (v % 10 === 2) return n + "nd";
  if (v % 10 === 3) return n + "rd";
  return n + "th";
}
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Pencil, Trash2, Download } from "lucide-react";

// Helper to show ordinal numbers (1st, 2nd, 3rd, ...)

// Demo: Use window to share registered users between pages (not persistent)
let registeredUsers: Array<{ id: number; name: string; email: string; password: string }> = [];
if (typeof window !== "undefined") {
  try {
    registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    // @ts-ignore
    window.__registeredUsers = registeredUsers;
  } catch {}
}

export default function LoginPage() {
  // ...existing state declarations...
  // Delete submission by index and type
  const handleDeleteSubmission = (type: string, idx: number) => {
    // Find all submissions of this type
    const filtered = submissions.filter((s: any) => {
      if (type === "Job Application") return String(s.type).includes(type);
      return s.type === type;
    });
    // Remove the idx-th item of this type
    const toDelete = filtered[idx];
    const updated = submissions.filter((s: any) => s !== toDelete);
    setSubmissions(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem('submissions', JSON.stringify(updated));
    }
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        setSubmissions(JSON.parse(localStorage.getItem("submissions") || "[]"));
      } catch {
        setSubmissions([]);
      }
    }
  }, [isAdmin]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState<null | { id: number; name: string; email: string }>(null);
  // Dynamic captcha
  const [captcha, setCaptcha] = useState("");
  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [captchaKey, setCaptchaKey] = useState(0);
  const captchaQuestion = `What is ${num1} + ${num2}?`;
  const captchaAnswer = (num1 + num2).toString();

  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [users, setUsers] = useState(registeredUsers);

  // Always sync users with window.__registeredUsers
  useEffect(() => {
    const syncUsers = () => {
      if (typeof window !== "undefined") {
        try {
          const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
          setUsers(users);
          // @ts-ignore
          window.__registeredUsers = users;
        } catch {
          setUsers([]);
        }
      }
    };
    syncUsers();
    window.addEventListener("focus", syncUsers);
    window.addEventListener("storage", syncUsers);
    return () => {
      window.removeEventListener("focus", syncUsers);
      window.removeEventListener("storage", syncUsers);
    };
  }, [isAdmin]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (captcha !== captchaAnswer) {
      setError("Captcha answer is incorrect.");
      setNum1(Math.floor(Math.random() * 10) + 1);
      setNum2(Math.floor(Math.random() * 10) + 1);
      setCaptcha("");
      setCaptchaKey(prev => prev + 1);
      return;
    }
    // Admin login
    if (email === "admin@gmail.com" && password === "1122") {
      setError("");
      setIsAdmin(true);
      return;
    }
    // User login
    const user = registeredUsers.find(u => u.email === email && u.password === password);
    if (!user) {
      setError("Invalid email or password.");
      return;
    }
    setError("");
    setUserDetails({ id: user.id, name: user.name, email: user.email });
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptcha("");
    setCaptchaKey(prev => prev + 1);
  };

  const handleDelete = (id: number) => {
    const updated = users.filter(u => u.id !== id);
    setUsers(updated);
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.__registeredUsers = updated;
      localStorage.setItem("registeredUsers", JSON.stringify(updated));
    }
  };

  const handleEdit = (user: { id: number; name: string; email: string; password: string }) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditPassword(user.password);
  };

  const handleSaveEdit = () => {
    const updated = users.map(u =>
      u.id === editId ? { ...u, name: editName, email: editEmail, password: editPassword } : u
    );
    setUsers(updated);
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.__registeredUsers = updated;
      localStorage.setItem("registeredUsers", JSON.stringify(updated));
    }
    setEditId(null);
    setEditName("");
    setEditEmail("");
    setEditPassword("");
  };

  const handleExportCSV = () => {
    const csvRows = ["ID,Name,Email,Password"];
    users.forEach(u => {
      csvRows.push(`${u.id},${u.name},${u.email},${u.password}`);
    });
    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-background p-2 sm:p-4 md:p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full">
          <div className="bg-white dark:bg-card rounded-xl shadow-2xl p-4 sm:p-8">
            <div className="flex flex-col items-center mb-6">
              <span className="bg-primary/10 rounded-full p-3 mb-2">
                <Lock className="h-8 w-8 text-primary" />
              </span>
              <h2 className="text-3xl font-bold text-center text-primary">Login</h2>
            </div>
            {!isAdmin ? (
              // ...existing login form code...
              <form onSubmit={handleLogin} className="space-y-5">
                {error && <div className="text-red-500 text-sm text-center mb-2">{error}</div>}
                {/* ...existing login form fields... */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">Captcha Verification</label>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-200">{captchaQuestion}</span>
                    <input
                      key={captchaKey}
                      type="text"
                      className="w-24 px-2 py-2 border border-gray-300 dark:border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-background"
                      value={captcha}
                      onChange={e => setCaptcha(e.target.value)}
                      required
                      placeholder="Answer"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full rounded-full text-base font-semibold py-2 bg-primary hover:bg-primary/90 transition-all duration-200 shadow">Login</Button>
              </form>
            ) : (
              <div className="mt-4">
                <h3 className="text-3xl font-extrabold mb-6 text-center text-primary">Admin Panel</h3>
                {/* Registered Users Section */}
                <div className="mb-8 bg-white dark:bg-background rounded-xl shadow-lg p-6 border border-primary/10">
                  <h4 className="text-2xl font-bold mb-4 text-primary">Registered Users <span className="text-base font-normal text-muted-foreground">({users.length})</span></h4>
                  {users.length === 0 ? (
                    <p className="text-muted-foreground">No users registered yet.</p>
                  ) : (
                    <ul className="space-y-4">
                      {users.filter(u =>
                        u.name.toLowerCase().includes(search.toLowerCase()) ||
                        u.email.toLowerCase().includes(search.toLowerCase())
                      ).map(user => (
                        <li key={user.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 bg-muted/20 rounded-lg p-3 sm:p-4 shadow">
                          {editId === user.id ? (
                            <div className="flex flex-col sm:flex-row gap-2 w-full items-center">
                              <input value={editName} onChange={e => setEditName(e.target.value)} className="px-2 py-1 rounded border w-1/4" />
                              <input value={editEmail} onChange={e => setEditEmail(e.target.value)} className="px-2 py-1 rounded border w-1/4" />
                              <input value={editPassword} onChange={e => setEditPassword(e.target.value)} className="px-2 py-1 rounded border w-1/4" />
                              <Button type="button" onClick={handleSaveEdit} className="px-2 bg-green-600 text-white">Save</Button>
                              <Button type="button" onClick={() => setEditId(null)} className="px-2" variant="outline">Cancel</Button>
                            </div>
                          ) : (
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full items-center">
                              <span className="font-semibold text-primary"><strong>ID:</strong> {user.id}</span>
                              <span className="font-semibold"><strong>Name:</strong> {user.name}</span>
                              <span className="font-semibold"><strong>Email:</strong> {user.email}</span>
                              <Button type="button" size="sm" onClick={() => handleEdit(user)} className="px-2 bg-blue-600 text-white"><Pencil className="h-4 w-4" /></Button>
                              <Button type="button" size="sm" onClick={() => handleDelete(user.id)} className="px-2 bg-red-600 text-white" variant="destructive"><Trash2 className="h-4 w-4" /></Button>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Job Applications Section */}
                <div className="mb-8 bg-white dark:bg-background rounded-xl shadow-lg p-4 sm:p-6 border border-primary/10">
                  <h4 className="text-2xl font-bold mb-4 text-primary">Job Applications <span className="text-base font-normal text-muted-foreground">({submissions.filter((s: any) => String(s.type).includes("Job Application")).length})</span></h4>
                  {submissions.filter((s: any) => String(s.type).includes("Job Application")).length === 0 ? (
                    <p className="text-muted-foreground">No job applications yet.</p>
                  ) : (
                    <ul className="space-y-4">
                      {submissions.filter((s: any) => String(s.type).includes("Job Application")).map((sub: any, i: number) => (
                        <li key={i} className="flex flex-col gap-2 bg-muted/20 rounded-lg p-4 shadow">
                          <div className="font-semibold text-primary">{sub.type} <span className="text-xs text-muted-foreground">({ordinal(i + 1)} application)</span></div>
                          {Object.entries(sub).map(([k, v]) => k !== "type" && (
                            <div key={k}><strong>{k}:</strong> {String(v)}</div>
                          ))}
                          <button
                            style={{ background: '#dc2626', color: 'white', padding: '8px', borderRadius: '4px', border: 'none', fontWeight: 'bold', marginTop: '8px', cursor: 'pointer' }}
                            onClick={() => handleDeleteSubmission('Job Application', i)}
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Requested Proposals Section */}
                <div className="mb-8 bg-white dark:bg-background rounded-xl shadow-lg p-6 border border-primary/10">
                  <h4 className="text-2xl font-bold mb-4 text-primary">Requested Proposals <span className="text-base font-normal text-muted-foreground">({submissions.filter((s: any) => s.type === "Request Proposal").length})</span></h4>
                  {submissions.filter((s: any) => s.type === "Request Proposal").length === 0 ? (
                    <p className="text-muted-foreground">No proposals requested yet.</p>
                  ) : (
                    <ul className="space-y-4">
                      {submissions.filter((s: any) => s.type === "Request Proposal").map((sub: any, i: number) => (
                        <li key={i} className="flex flex-col gap-2 bg-muted/20 rounded-lg p-3 sm:p-4 shadow">
                          <div className="font-semibold text-primary">Proposal <span className="text-xs text-muted-foreground">({ordinal(i + 1)} proposal)</span></div>
                          {Object.entries(sub).map(([k, v]) => (
                            <div key={k}><strong>{k}:</strong> {String(v)}</div>
                          ))}
                          <button
                            style={{ background: '#dc2626', color: 'white', padding: '8px', borderRadius: '4px', border: 'none', fontWeight: 'bold', marginTop: '8px', cursor: 'pointer' }}
                            onClick={() => handleDeleteSubmission('Request Proposal', i)}
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Booked Calls Section */}
                <div className="mb-8 bg-white dark:bg-background rounded-xl shadow-lg p-6 border border-primary/10">
                  <h4 className="text-2xl font-bold mb-4 text-primary">Booked Calls <span className="text-base font-normal text-muted-foreground">({submissions.filter((s: any) => s.type === "Book a Call").length})</span></h4>
                  {submissions.filter((s: any) => s.type === "Book a Call").length === 0 ? (
                    <p className="text-muted-foreground">No calls booked yet.</p>
                  ) : (
                    <ul className="space-y-4">
                      {submissions.filter((s: any) => s.type === "Book a Call").map((sub: any, i: number) => (
                        <li key={i} className="flex flex-col gap-2 bg-muted/20 rounded-lg p-4 shadow">
                          <div className="font-semibold text-primary">Call <span className="text-xs text-muted-foreground">({ordinal(i + 1)} call)</span></div>
                          {Object.entries(sub).map(([k, v]) => (
                            <div key={k}><strong>{k}:</strong> {String(v)}</div>
                          ))}
                          <button
                            style={{ background: '#dc2626', color: 'white', padding: '8px', borderRadius: '4px', border: 'none', fontWeight: 'bold', marginTop: '8px', cursor: 'pointer' }}
                            onClick={() => handleDeleteSubmission('Book a Call', i)}
                          >
                            Delete
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Button type="button" className="w-full mt-8 bg-gradient-to-r from-primary to-green-500 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform" onClick={() => setIsAdmin(false)}>
                  Logout
                </Button>
              </div>
            )}
            {userDetails && !isAdmin && (
              <div className="mt-8 bg-muted/30 rounded-lg p-4 text-center">
                <h3 className="text-lg font-bold mb-2">User Details</h3>
                <p><strong>ID:</strong> {userDetails.id}</p>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Email:</strong> {userDetails.email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
