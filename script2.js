const channels = [
    { id: 1, name: 'Channel 1', class: 'Class A', region: 'us-east-1', location: 'New York', createdAt: '2024-02-29', state: 'Active', deliveryType: 'HTTP', deliveryUrl: 'http://example.com', totalDeliveries: 100 },
    { id: 1, name: 'Channel 2', class: 'Class B', region: 'us-west-2', location: 'California', createdAt: '2024-03-01', state: 'Inactive', deliveryType: 'HTTPS', deliveryUrl: 'https://example.com', totalDeliveries: 50 },
  ];
  
  function fetchChannels() {
    const userId = document.getElementById('userId').value;
    const channelList = document.getElementById('channelList');
    channelList.innerHTML = '';
  
    const userChannels = channels.filter(channel => channel.id == userId);
    if (userChannels.length === 0) {
      channelList.innerHTML = '<p>No channels found for this amagi ID.</p>';
      return;
    }
  
    userChannels.forEach(channel => {
      const channelDiv = document.createElement('div');
      channelDiv.classList.add('channel');
      channelDiv.textContent = channel.name;
      channelDiv.addEventListener('click', () => displayChannelDetails(channel));
      channelList.appendChild(channelDiv);
    });
  }
  
  function displayChannelDetails(channel) {
    const channelDetails = document.getElementById('channelDetails');
    channelDetails.innerHTML = `
      <h3>Channel Details</h3>
      <p><strong>Name:</strong> ${channel.name}</p>
      <p><strong>Class:</strong> ${channel.class}</p>
      <p><strong>ARN Region:</strong> ${channel.region}</p>
      <p><strong>Customer Geo Location:</strong> ${channel.location}</p>
      <p><strong>Created At:</strong> ${channel.createdAt}</p>
      <p><strong>State:</strong> ${channel.state}</p>
      <p><strong>Delivery Type:</strong> ${channel.deliveryType}</p>
      <p><strong>Delivery URL:</strong> ${channel.deliveryUrl}</p>
      <p><strong>Total Deliveries:</strong> ${channel.totalDeliveries}</p>
    `;
  }