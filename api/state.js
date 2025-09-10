// Azure Static Web Apps API function for managing system state
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // Return current state
      // In a real implementation, this would read from a database
      // For demo, return default state
      return res.status(200).json({
        status: 'off',
        lastUpdated: new Date().toISOString(),
        updatedBy: 'system'
      });
    }

    if (req.method === 'POST') {
      const { status, timestamp } = req.body;

      if (!status || !['on', 'off'].includes(status)) {
        return res.status(400).json({
          error: 'Invalid status. Must be "on" or "off"'
        });
      }

      // In a real implementation, this would:
      // 1. Save the state to a database
      // 2. Trigger notifications to all connected clients
      // 3. Log the change for audit purposes

      console.log(`State changed to: ${status} at ${timestamp}`);

      return res.status(200).json({
        success: true,
        status: status,
        lastUpdated: timestamp || new Date().toISOString(),
        message: `System turned ${status}`
      });
    }

    return res.status(405).json({
      error: 'Method not allowed'
    });

  } catch (error) {
    console.error('State API error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}
