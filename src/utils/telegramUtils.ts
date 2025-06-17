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

/**
 * Extracts username from Telegram Web App initData
 * Returns @username if available, otherwise returns first_name + last_name
 * Returns null if no user information is found
 */
export function extractUsernameFromInitData(
  initData: string
): string | undefined {
  try {
    const decodedData = decodeURIComponent(initData);

    const userMatch = decodedData.match(/user=(\{.*?\})/);
    if (!userMatch) return undefined;

    const userJson = JSON.parse(userMatch[1]);

    // Return @username if available
    if (userJson.username) {
      return `@${userJson.username}`;
    }
    // Otherwise use first_name + last_name
    else if (userJson.first_name) {
      return (
        userJson.first_name +
        (userJson.last_name ? " " + userJson.last_name : "")
      );
    }

    return undefined;
  } catch (error) {
    console.error("Error extracting username from initData:", error);
    return undefined;
  }
}

/**
 * Extracts full user object from Telegram Web App initData
 * Returns the complete user object for more flexibility
 */
export function extractUserFromInitData(initData: string): any | null {
  try {
    const decodedData = decodeURIComponent(initData);

    const userMatch = decodedData.match(/user=(\{.*?\})/);
    if (!userMatch) return null;

    return JSON.parse(userMatch[1]);
  } catch (error) {
    console.error("Error extracting user from initData:", error);
    return null;
  }
}
