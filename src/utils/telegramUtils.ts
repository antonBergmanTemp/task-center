export function extractUserIdFromInitData(initData: string): string | null {
  try {
    const decodedData = decodeURIComponent(initData);

    const userMatch = decodedData.match(/user=(\{.*?\})/);
    if (!userMatch) return null;

    const userJson = JSON.parse(userMatch[1]);

    return userJson.id ? userJson.id.toString() : null;
  } catch (error) {
    console.error("Error extracting user ID from initData:", error);
    return null;
  }
}
