#!/usr/bin/env node

/**
 * Environment Variables Verification Script
 * Checks for required environment variables before build
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const REQUIRED_ENV_VARS = [
  // Note: These are checked but not required for build to succeed
  // The app has fallback values in the code
];

const OPTIONAL_ENV_VARS = [
  'VITE_CONTACT_EMAIL',
  'VITE_CONTACT_PHONE',
  'VITE_SITE_URL',
  'VITE_WEB3FORMS_ACCESS_KEY',
  'VITE_INSTAGRAM_URL',
  'VITE_WHATSAPP_URL',
  'VITE_FACEBOOK_URL',
  'VITE_LOGIN_URL',
  'VITE_FORMSPREE_FORM_ID'
];

function loadEnvFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8');
    const env = {};
    
    content.split('\n').forEach(line => {
      line = line.trim();
      if (line && !line.startsWith('#')) {
        const [key, ...valueParts] = line.split('=');
        if (key && valueParts.length > 0) {
          env[key.trim()] = valueParts.join('=').trim();
        }
      }
    });
    
    return env;
  } catch (error) {
    return {};
  }
}

function checkEnvironmentVariables() {
  console.log('🔍 Verifying environment variables...\n');
  
  // Load environment variables from .env file if it exists
  const envFile = join(process.cwd(), '.env');
  const envFromFile = loadEnvFile(envFile);
  
  // Combine with process.env (environment variables take precedence)
  const env = { ...envFromFile, ...process.env };
  
  let hasErrors = false;
  let hasWarnings = false;
  
  // Check required variables
  console.log('📋 Required Environment Variables:');
  REQUIRED_ENV_VARS.forEach(key => {
    const value = env[key];
    if (!value) {
      console.log(`❌ ${key}: MISSING`);
      hasErrors = true;
    } else {
      console.log(`✅ ${key}: OK`);
    }
  });
  
  console.log('\n📋 Optional Environment Variables:');
  OPTIONAL_ENV_VARS.forEach(key => {
    const value = env[key];
    if (!value) {
      console.log(`⚠️  ${key}: Not set (optional)`);
      hasWarnings = true;
    } else {
      console.log(`✅ ${key}: OK`);
    }
  });
  
  // Summary
  console.log('\n📊 Summary:');
  if (hasErrors) {
    console.log('❌ Build will fail - missing required environment variables');
    console.log('\n💡 To fix:');
    console.log('1. Copy env.example to .env');
    console.log('2. Fill in the required values');
    console.log('3. Run the build again');
    process.exit(1);
  } else if (hasWarnings) {
    console.log('⚠️  Build will succeed but some optional features may not work');
  } else {
    console.log('✅ All environment variables are properly configured');
  }
  
  console.log('\n🔗 Environment file location: .env');
  console.log('📝 Template file: env.example');
}

// Run the verification
checkEnvironmentVariables();
