#!/bin/bash
cd /tmp/kavia/workspace/code-generation/responsive-cms-dashboard-1249-1258/blog_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

