import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Droplets, Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const FilterPlant: React.FC = () => {
  const plantNotifications = [
    {
      id: '1',
      title: 'RO Plant Maintenance Completed',
      description: 'Scheduled maintenance has been completed successfully. Water quality is back to optimal levels.',
      status: 'completed',
      date: '2024-01-15',
      time: '04:30 PM',
      waterQuality: 'Excellent',
      pressure: 'Normal',
      nextMaintenance: '2024-02-15'
    },
    {
      id: '2',
      title: 'Filter Replacement Required',
      description: 'RO membrane filter needs replacement. Temporary reduced efficiency expected.',
      status: 'warning',
      date: '2024-01-14',
      time: '10:00 AM',
      waterQuality: 'Good',
      pressure: 'Slightly Low',
      nextMaintenance: '2024-01-20'
    },
    {
      id: '3',
      title: 'Water Quality Report - January',
      description: 'Monthly water quality analysis shows excellent results. All parameters within safe limits.',
      status: 'completed',
      date: '2024-01-10',
      time: '09:00 AM',
      waterQuality: 'Excellent',
      pressure: 'Normal',
      nextMaintenance: '2024-02-10'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Droplets className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Filter Plant Notifications | Hamdard Committee Water Plant</title>
        <meta 
          name="description" 
          content="RO water filter plant notifications, maintenance schedules, water quality reports, and operational updates from Hamdard Committee Chichawatni." 
        />
        <meta 
          name="keywords" 
          content="RO plant, water filter, maintenance, water quality, hamdard committee, chichawatni, notifications" 
        />
        <link rel="canonical" href="https://hamdardcommittee.org/notifications/filter-plant" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Filter Plant Notifications | Hamdard Committee" />
        <meta property="og:description" content="RO water plant maintenance updates and water quality reports" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hamdardcommittee.org/notifications/filter-plant" />
      </Helmet>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/notifications"
              className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Filter Plant Updates</h1>
                <p className="text-gray-600">RO water plant maintenance and operational notifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-gray-600">Completed Tasks</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">1</div>
                <div className="text-gray-600">Pending Actions</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center space-x-3">
              <Droplets className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">Excellent</div>
                <div className="text-gray-600">Current Water Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Plant Operations</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {plantNotifications.map((notification) => (
              <div key={notification.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  {getStatusIcon(notification.status)}
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {notification.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(notification.status)}`}>
                        {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {notification.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{formatDate(notification.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{notification.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Droplets className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">Quality: {notification.waterQuality}</span>
                      </div>
                    </div>

                    {notification.nextMaintenance && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="text-sm text-blue-800">
                          <strong>Next Maintenance:</strong> {formatDate(notification.nextMaintenance)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Water Plant Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">Current Status</h4>
              <ul className="space-y-1">
                <li>• Operational: Yes</li>
                <li>• Water Quality: Excellent</li>
                <li>• Pressure: Normal</li>
                <li>• Last Maintenance: Jan 15, 2024</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact Support</h4>
              <ul className="space-y-1">
                <li>• Plant Manager: +92-300-XXXXXXX</li>
                <li>• Emergency: +92-310-7591175</li>
                <li>• Email: waterplant@hamdardcommittee.org</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPlant;