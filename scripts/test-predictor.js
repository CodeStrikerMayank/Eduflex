// Predictor Unit Test Suite
// Validates admissions probability buckets (Safe, Moderate, Ambitious) against real cutoff registers

const { predictColleges } = require('../src/lib/dataService');

async function runTests() {
  console.log('==============================================');
  console.log('EduFlex Predictor Algorithm: Test Suite');
  console.log('==============================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${message}`);
      failed++;
    }
  }

  // Test 1: JEE Advanced Rank 120 General
  console.log('--- Test 1: JEE Advanced AIR 120 ---');
  const jeeResults = await predictColleges({
    examSlug: 'jee-advanced',
    rank: 120,
    category: 'GEN'
  });

  assert(jeeResults.length > 0, 'Returns college predictions for JEE Advanced');

  const iitb = jeeResults.find(r => r.college.slug === 'iit-bombay');
  if (iitb) {
    assert(iitb.chanceCategory === 'Ambitious', `IIT Bombay CSE at rank 120 should be Ambitious (Closing: ${iitb.closingRank})`);
  }

  const iitm = jeeResults.find(r => r.college.slug === 'iit-madras');
  if (iitm) {
    assert(iitm.chanceCategory === 'Moderate', `IIT Madras CSE at rank 120 should be Moderate (Closing: ${iitm.closingRank})`);
  }

  // Test 2: NEET UG Rank 25
  console.log('\n--- Test 2: NEET UG AIR 25 ---');
  const neetResults = await predictColleges({
    examSlug: 'neet-ug',
    rank: 25,
    category: 'GEN'
  });
  const aiims = neetResults.find(r => r.college.slug === 'aiims-new-delhi');
  assert(aiims !== undefined, 'AIIMS New Delhi is returned for NEET UG');
  if (aiims) {
    assert(aiims.closingRank === 57, 'AIIMS MBBS cutoff verified at 57');
  }

  // Test 3: CLAT Rank 45
  console.log('\n--- Test 3: CLAT AIR 45 ---');
  const clatResults = await predictColleges({
    examSlug: 'clat',
    rank: 45,
    category: 'GEN'
  });
  const nlsiu = clatResults.find(r => r.college.slug === 'nlsiu-bengaluru');
  assert(nlsiu !== undefined, 'NLSIU Bengaluru is returned for CLAT');
  if (nlsiu) {
    assert(nlsiu.chanceCategory === 'Moderate' || nlsiu.chanceCategory === 'Safe', 'High admission chance at NLSIU with AIR 45');
  }

  console.log('\n==============================================');
  console.log(`Results: ${passed} Passed, ${failed} Failed`);
  console.log('==============================================');
}

runTests().catch(console.error);
