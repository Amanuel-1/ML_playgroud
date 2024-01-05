from collections import defaultdict

n, m = map(int, input().split())
mp = defaultdict(int)
matrix = []
ans = 0

for i in range(n):
    row = list(map(int, input().split()))
    matrix.append(row)
    for j in range(m):
        color = row[j]
        ans += mp[color] * 2  # Add the previous occurrences twice
        mp[color] += 1  # Increment the count of the current color

print(ans)