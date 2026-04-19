import subprocess
result = subprocess.run(['git', 'push', 'origin', 'HEAD:main'], capture_output=True, text=True)
print(result.stderr)
