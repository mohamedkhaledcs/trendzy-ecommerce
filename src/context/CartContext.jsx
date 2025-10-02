import { useState, useEffect } from 'react';
import { CartContext } from './contexts';

// Cart context: manages user cart and localStorage

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	// تحميل العربة من localStorage حسب المستخدم الحالي
	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			const { username } = JSON.parse(storedUser);
			const userCart = JSON.parse(localStorage.getItem(`cart_${username}`)) || [];
			setCart(userCart);
		} else {
			setCart([]);
		}
	}, []);

	// حفظ العربة في localStorage عند أي تغيير
	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			const { username } = JSON.parse(storedUser);
			localStorage.setItem(`cart_${username}` , JSON.stringify(cart));
		}
	}, [cart]);

	// إضافة منتج للعربة
	const addToCart = (product) => {
		setCart(prev => {
			const exists = prev.find(item => item.id === product.id);
			if (exists) {
				return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
			}
			return [...prev, { ...product, quantity: 1 }];
		});
	};

	// حذف منتج من العربة
	const removeFromCart = (productId) => {
		setCart(prev => prev.filter(item => item.id !== productId));
	};

	// تعديل كمية منتج
	const updateQuantity = (productId, quantity) => {
		setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
	};

	// تفريغ العربة
	const clearCart = () => setCart([]);

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

// تم نقل هوك useCart إلى ملف منفصل لتجنب مشاكل Fast Refresh
