"use client";

import Link from "next/link";
import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Bell,
  Tag
} from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  description: string;
  category: 'filter-plant' | 'general' | 'maintenance' | 'emergency' | 'event';
  date: string;
  time: string;
  isRead: boolean;
  priority: 'high' | 'medium' | 'low';
}

const NotificationsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const notifications: Notification[] = [
    {
      id: '',
      title: 'RO Plant Maintenance Schedule',
      description: 'Regular maintenance for water filter plant scheduled for next week. Service may be temporarily unavailable.',
      category: 'filter-plant',
      date: '2024-01-15',
      time: '10:00 AM',
      isRead: false,
      priority: 'medium'
    },
    // {
    //   id: '2',
    //   title: 'Community Meeting Announcement',
    //   description: 'Monthly community meeting to discuss upcoming projects and initiatives.',
    //   category: 'general',
    //   date: '2024-01-16',
    //   time: '03:00 PM',
    //   isRead: true,
    //   priority: 'low'
    // },
    // {
    //   id: '3',
    //   title: 'Emergency Water Supply Interruption',
    //   description: 'Temporary water supply interruption due to pipeline maintenance in sector B.',
    //   category: 'emergency',
    //   date: '2024-01-14',
    //   time: '08:00 AM',
    //   isRead: false,
    //   priority: 'high'
    // },
    // {
    //   id: '4',
    //   title: 'New Filter Installation Complete',
    //   description: 'New RO filter system has been successfully installed and is now operational.',
    //   category: 'filter-plant',
    //   date: '2024-01-13',
    //   time: '02:30 PM',
    //   isRead: true,
    //   priority: 'medium'
    // },
    // {
    //   id: '5',
    //   title: 'Blood Donation Camp',
    //   description: 'Annual blood donation camp in collaboration with City Hospital.',
    //   category: 'event',
    //   date: '2024-01-20',
    //   time: '09:00 AM',
    //   isRead: false,
    //   priority: 'high'
    // }
  ];

  const categories = [
    { id: 'all', label: 'All Notifications', count: notifications.length },
    { id: 'filter-plant', label: 'Filter Plant', count: notifications.filter(n => n.category === 'filter-plant').length },
    { id: 'emergency', label: 'Emergency', count: notifications.filter(n => n.category === 'emergency').length },
    { id: 'general', label: 'General', count: notifications.filter(n => n.category === 'general').length },
    { id: 'event', label: 'Events', count: notifications.filter(n => n.category === 'event').length },
    { id: 'maintenance', label: 'Maintenance', count: notifications.filter(n => n.category === 'maintenance').length },
  ];

  const filteredNotifications = useMemo(() => {
    let filtered = notifications;

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(notification => notification.category === activeFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(notification =>
        notification.title.toLowerCase().includes(query) ||
        notification.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [notifications, activeFilter, searchQuery]);

  const getCategoryColor = (category: string) => {
    const colors = {
      'filter-plant': 'bg-blue-100 text-blue-800 border-blue-200',
      'emergency': 'bg-red-100 text-red-800 border-red-200',
      'general': 'bg-gray-100 text-gray-800 border-gray-200',
      'event': 'bg-green-100 text-green-800 border-green-200',
      'maintenance': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityIcon = (priority: string) => {
    const icons = {
      high: '🔴',
      medium: '🟡',
      low: '🟢'
    };
    return icons[priority as keyof typeof icons];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
   

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Bell className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                <p className="text-gray-600">Stay updated with community alerts</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Unread</div>
              <div className="text-lg font-semibold text-emerald-600">
                {notifications.filter(n => !n.isRead).length} New
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h2>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                      activeFilter === category.id
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activeFilter === category.id
                        ? 'bg-emerald-200 text-emerald-800'
                        : 'bg-gray-200 text-gray-700'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {activeFilter === 'all' ? 'All Notifications' : 
                     categories.find(c => c.id === activeFilter)?.label}
                    <span className="text-gray-500 text-sm font-normal ml-2">
                      ({filteredNotifications.length})
                    </span>
                  </h2>
                  <div className="text-sm text-gray-500">
                    Sorted by: Latest
                  </div>
                </div>
              </div>

              {/* Notifications List */}
              <div className="divide-y divide-gray-200">
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-6 hover:bg-gray-50 transition-colors duration-200 ${
                        !notification.isRead ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                            <h3 className="text-lg font-semibold text-gray-900">
                              {notification.title}
                            </h3>
                            <span className="text-sm">
                              {getPriorityIcon(notification.priority)}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-3">
                            {notification.description}
                          </p>

                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className={`px-2 py-1 rounded-full border ${getCategoryColor(notification.category)}`}>
                              {categories.find(c => c.id === notification.category)?.label}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(notification.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{notification.time}</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/notifications/${notification.category}/${notification.id}`}
                          className="ml-4 p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
                    <p className="text-gray-500">
                      {searchQuery 
                        ? `No notifications matching "${searchQuery}"`
                        : `No notifications in ${categories.find(c => c.id === activeFilter)?.label}`
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/notifications/filter-plant"
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">
                      Filter Plant Updates
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      RO plant maintenance and water quality reports
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/notifications/emergency"
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600">
                      Emergency Alerts
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Critical updates and urgent community notices
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;