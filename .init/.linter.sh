#!/bin/bash
cd /tmp/kavia/workspace/code-generation/browser-tic-tac-toe-664328-664337/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

