// import { useState } from "react";
// import Image from "../../public/vite.svg";
// import { motion } from "framer-motion";
// import { FaHospital, FaLock, FaEnvelope, FaUser, FaPhone, FaHome } from "react-icons/fa";

// export default function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => setIsLogin(!isLogin);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-300 p-4">
//       <Image
//         src={Image}
//         alt="Modern Hospital"
//         layout="fill"
//         objectFit="cover"
//         className="absolute inset-0 mix-blend-overlay"
//         priority
//       />
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl w-full bg-white bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden"
//       >
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2 bg-green-600 p-8 text-white flex flex-col justify-center items-center">
//             <FaHospital className="text-6xl mb-4" />
//             <h2 className="text-3xl font-bold mb-2">Welcome to MediCare</h2>
//             <p className="text-center mb-6">Your trusted healthcare management system</p>
//             <button
//               onClick={toggleForm}
//               className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-100 transition duration-300"
//             >
//               {isLogin ? "Create an Account" : "Sign In"}
//             </button>
//           </div>
//           <div className="md:w-1/2 p-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">
//               {isLogin ? "Sign In to Your Account" : "Create a New Account"}
//             </h3>
//             <form className="space-y-4">
//               {!isLogin && (
//                 <>
//                   <div className="relative">
//                     <FaUser className="absolute top-3 left-3 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Full Name"
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <FaPhone className="absolute top-3 left-3 text-gray-400" />
//                     <input
//                       type="tel"
//                       placeholder="Phone Number"
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
//                       required
//                     />
//                   </div>
//                   <div className="relative">
//                     <FaHome className="absolute top-3 left-3 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Address"
//                       className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
//                       required
//                     />
//                   </div>
//                 </>
//               )}
//               <div className="relative">
//                 <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
//                   required
//                 />
//               </div>
//               <div className="relative">
//                 <FaLock className="absolute top-3 left-3 text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
//                   required
//                 />
//               </div>
//               {isLogin && (
//                 <div className="flex items-center justify-between">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="mr-2" />
//                     <span className="text-sm text-gray-600">Remember me</span>
//                   </label>
//                   <a href="#" className="text-sm text-green-600 hover:underline">
//                     Forgot password?
//                   </a>
//                 </div>
//               )}
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
//               >
//                 {isLogin ? "Sign In" : "Create Account"}
//               </button>
//             </form>
//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">
//                 {isLogin ? "Don't have an account?" : "Already have an account?"}
//                 <button onClick={toggleForm} className="ml-1 text-green-600 hover:underline">
//                   {isLogin ? "Sign up" : "Sign in"}
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }