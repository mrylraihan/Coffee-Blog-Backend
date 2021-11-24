#!/bin/sh
# TOKEN="a90f6eb558026a9d61b5c3027f661482" sh curl-scripts/cafes/index.sh
API="http://localhost:4741"
URL_PATH="/cafes"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
