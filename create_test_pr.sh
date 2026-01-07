#!/bin/bash
set -e

cd /Users/nooryasser/Desktop/My\ Space/sab3a/sab3a.co

# Checkout main and pull latest
git checkout main
git pull origin main

# Create new test branch
BRANCH_NAME="test/verify-no-waiting-check-$(date +%s)"
git checkout -b "$BRANCH_NAME"

# Create test file
cat > VERIFY_NO_WAITING_CHECK.md << 'EOF'
# ✅ Verification: No Waiting Check

This PR verifies that the "waiting" check has been removed.

## Expected Result:

### ✅ Should See:
- Only ONE "build" check
- Status: "Successful" or "Running"
- NO "waiting" check

### ❌ Should NOT See:
- "CI / build (pull_request) - Waiting"
- Duplicate checks
- Two build checks

## Test Date: $(date)

If you see only ONE build check, then the fix worked! 🎉
EOF

# Commit and push
git add VERIFY_NO_WAITING_CHECK.md
git commit -m "test: Verify no waiting check appears"
git push origin "$BRANCH_NAME"

# Create PR
gh pr create \
  --title "Test: Verify No Waiting Check" \
  --body "This PR verifies that the waiting check has been removed. Should see only ONE build check." \
  --base main \
  --head "$BRANCH_NAME"

echo ""
echo "✅ PR created! Check it now."

