import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Heart, Mail, Lock, User, MapPin, Phone, ArrowLeft, CheckCircle } from 'lucide-react';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Step 2: Donor Details
    bloodGroup: '',
    phone: '',
    pincode: '',
    role: 'donor', // donor, recipient, hospital
    // Step 3: Verification
    verificationCode: '',
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock registration process
    setTimeout(() => {
      setIsLoading(false);
      if (step === 3) {
        // Complete registration
        console.log('Registration complete:', formData);
      } else {
        handleNext();
      }
    }, 2000);
  };

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Role Selection */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          I want to register as:
        </label>
        <div className="grid grid-cols-1 gap-3">
          {[
            { value: 'donor', label: 'Blood Donor', desc: 'I want to donate blood and save lives' },
            { value: 'recipient', label: 'Recipient', desc: 'I need blood for myself or family' },
            { value: 'hospital', label: 'Hospital/Organization', desc: 'Medical facility or NGO' },
          ].map((role) => (
            <motion.label
              key={role.value}
              whileHover={{ scale: 1.02 }}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.role === role.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                name="role"
                value={role.value}
                checked={formData.role === role.value}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="sr-only"
              />
              <div className="flex items-center">
                <div className={`w-4 h-4 border-2 rounded-full mr-3 ${
                  formData.role === role.value ? 'border-primary bg-primary' : 'border-border'
                }`}>
                  {formData.role === role.value && (
                    <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{role.label}</div>
                  <div className="text-sm text-muted-foreground">{role.desc}</div>
                </div>
              </div>
            </motion.label>
          ))}
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="input-blood pl-11"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-blood pl-11"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="input-blood pl-11 pr-11"
            placeholder="Create a strong password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-foreground mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="input-blood pl-11 pr-11"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* Blood Group */}
      {formData.role === 'donor' && (
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Blood Group
          </label>
          <select
            required
            value={formData.bloodGroup}
            onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
            className="input-blood"
          >
            <option value="">Select your blood group</option>
            {bloodGroups.map((group) => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
      )}

      {/* Phone Number */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
          Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input-blood pl-11"
            placeholder="Enter your phone number"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          We'll verify this number for security
        </p>
      </div>

      {/* Pincode */}
      <div>
        <label htmlFor="pincode" className="block text-sm font-semibold text-foreground mb-2">
          Pincode
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            id="pincode"
            name="pincode"
            type="text"
            required
            value={formData.pincode}
            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            className="input-blood pl-11"
            placeholder="Enter your area pincode"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Helps us match you with nearby donors/recipients
        </p>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6 text-center"
    >
      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-success" />
      </div>
      
      <h3 className="text-xl font-bold text-foreground">
        Verify Your Phone Number
      </h3>
      
      <p className="text-muted-foreground">
        We've sent a verification code to<br />
        <strong>{formData.phone}</strong>
      </p>

      <div>
        <label htmlFor="verificationCode" className="block text-sm font-semibold text-foreground mb-2">
          Verification Code
        </label>
        <input
          id="verificationCode"
          name="verificationCode"
          type="text"
          required
          value={formData.verificationCode}
          onChange={(e) => setFormData({ ...formData, verificationCode: e.target.value })}
          className="input-blood text-center text-2xl font-mono tracking-widest"
          placeholder="000000"
          maxLength={6}
        />
      </div>

      <button
        type="button"
        className="text-sm text-primary hover:text-primary-glow transition-colors"
      >
        Resend verification code
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/20 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Back Button */}
        {step === 1 ? (
          <Link 
            to="/" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        ) : (
          <button
            onClick={handleBack}
            className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 animate-blood-pulse"
          >
            <Heart className="h-8 w-8 text-white" fill="currentColor" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Join BloodBridge
          </h2>
          <p className="text-muted-foreground">
            {step === 1 && 'Create your account to start saving lives'}
            {step === 2 && 'Tell us more about yourself'}
            {step === 3 && 'Almost there! Let\'s verify your identity'}
          </p>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i <= step ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="card-elevated p-8"
        >
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          {/* Submit Button */}
          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full btn-primary ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  {step === 3 ? 'Verifying...' : 'Processing...'}
                </div>
              ) : (
                <>
                  {step === 1 && 'Continue'}
                  {step === 2 && 'Continue'}
                  {step === 3 && 'Complete Registration'}
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Login Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          Already have an account?{' '}
          <Link 
            to="/login" 
            className="font-semibold text-primary hover:text-primary-glow transition-colors"
          >
            Sign in
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;