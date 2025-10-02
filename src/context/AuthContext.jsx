import { useState, useEffect } from 'react';
import { AuthContext } from './contexts';

// Auth context: handles login, register, and user roles

// بيانات الأدمن الافتراضية
const initialAdmin = {
  username: "admin",
  password: "admin1234",
  role: "admin",
};


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // تحميل المستخدم الحالي من localStorage عند بدء التطبيق
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // تسجيل الدخول
  const login = (username, password) => {
    // تحقق من الأدمن
    if (username === initialAdmin.username && password === initialAdmin.password) {
      const adminUser = { username, role: "admin" };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      return { success: true, role: "admin" };
    }

    // تحقق من المستخدمين العاديين
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(u => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return { success: true, role: "user" };
    }
    return { success: false, message: "بيانات الدخول غير صحيحة" };
  };

  // تسجيل مستخدم جديد
  const register = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.username === username)) {
      return { success: false, message: "اسم المستخدم موجود بالفعل" };
    }
    const newUser = { username, password, role: "user" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  };

  // تسجيل الخروج
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// هوك لاستخدام سياق المصادقة بسهولة
// تم نقل هوك useAuth إلى ملف منفصل لتجنب مشاكل Fast Refresh
