"use client"
import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp,
  PieChart,
  BarChart3,
  Eye,
  Filter
} from 'lucide-react';

const ReportsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const annualReports = [
    {
      year: '2024',
      title: 'Annual Report 2024',
      description: 'Complete overview of activities, finances, and impact for 2024',
      downloadUrl: '#',
      size: '2.5 MB',
      pages: 45,
      published: '2024-01-15'
    },
    {
      year: '2023',
      title: 'Annual Report 2023',
      description: 'Complete overview of activities, finances, and impact for 2023',
      downloadUrl: '#',
      size: '2.8 MB',
      pages: 52,
      published: '2023-12-31'
    },
    {
      year: '2022',
      title: 'Annual Report 2022',
      description: 'Complete overview of activities, finances, and impact for 2022',
      downloadUrl: '#',
      size: '2.3 MB',
      pages: 38,
      published: '2022-12-31'
    }
  ];

  const monthlyReports = [
    {
      month: 'January 2024',
      income: '₨45,000',
      expenses: '₨38,000',
      beneficiaries: 156,
      downloadUrl: '#',
      published: '2024-02-05'
    },
    {
      month: 'December 2023',
      income: '₨52,000',
      expenses: '₨48,000',
      beneficiaries: 189,
      downloadUrl: '#',
      published: '2024-01-05'
    },
    {
      month: 'November 2023',
      income: '₨38,000',
      expenses: '₨35,000',
      beneficiaries: 134,
      downloadUrl: '#',
      published: '2023-12-05'
    }
  ];

  const financialSummary = {
    totalIncome: '₨567,000',
    totalExpenses: '₨523,000',
    surplus: '₨44,000',
    donorsCount: 234,
    projectsFunded: 12,
    beneficiaries: 1456
  };

  const expenseBreakdown = [
    { category: 'Ambulance Service', amount: '₨156,000', percentage: 30 },
    { category: 'Medical Aid', amount: '₨104,000', percentage: 20 },
    { category: 'Ushar Zakat Distribution', amount: '₨78,000', percentage: 15 },
    { category: 'Water Filter Plant', amount: '₨65,000', percentage: 12 },
    { category: 'Administrative Costs', amount: '₨52,000', percentage: 10 },
    { category: 'Other Services', amount: '₨68,000', percentage: 13 }
  ];

  const donorAcknowledgements = [
    { name: 'Ahmad Ali', amount: '₨25,000', type: 'Major Donor', date: '2024-01-15' },
    { name: 'Fatima Foundation', amount: '₨50,000', type: 'Corporate', date: '2024-01-10' },
    { name: 'Muhammad Hassan', amount: '₨15,000', type: 'Regular Donor', date: '2024-01-08' },
    { name: 'Aisha Welfare Trust', amount: '₨30,000', type: 'Trust', date: '2024-01-05' },
    { name: 'Anonymous Donor', amount: '₨20,000', type: 'Anonymous', date: '2024-01-03' }
  ];

  const auditReports = [
    {
      year: '2023',
      auditor: 'Khan & Associates',
      status: 'Clean Opinion',
      downloadUrl: '#',
      published: '2024-03-15'
    },
    {
      year: '2022',
      auditor: 'Ahmad Chartered Accountants',
      status: 'Clean Opinion',
      downloadUrl: '#',
      published: '2023-03-20'
    }
  ];

  const impactMetrics = [
    { metric: 'Ambulance Rides', value: '456', change: '+23%' },
    { metric: 'Families Helped', value: '234', change: '+18%' },
    { metric: 'Medical Camps', value: '12', change: '+50%' },
    { metric: 'Water Distributed (Liters)', value: '45,000', change: '+35%' }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FileText className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Reports & Transparency</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete transparency in our operations. Access detailed financial reports, 
            impact assessments, and audit documents to see how your contributions make a difference.
          </p>
        </div>
      </section>

      {/* Financial Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Financial Overview 2024</h2>
            <p className="text-xl text-gray-600">Transparent financial management for community trust</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{financialSummary.totalIncome}</h3>
              <p className="text-green-600 font-medium">Total Income</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{financialSummary.totalExpenses}</h3>
              <p className="text-blue-600 font-medium">Total Expenses</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{financialSummary.beneficiaries}</h3>
              <p className="text-purple-600 font-medium">People Helped</p>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Expense Breakdown</h3>
            <div className="space-y-4">
              {expenseBreakdown.map((expense, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{expense.category}</span>
                      <span className="text-gray-600">{expense.amount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-600 h-2 rounded-full" 
                        style={{ width: `${expense.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500 w-12 text-right">{expense.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Annual Reports</h2>
            <p className="text-xl text-gray-600">Comprehensive yearly reports of our activities and impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                    {report.year}
                  </span>
                  <FileText className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{report.title}</h3>
                <p className="text-gray-600 mb-4">{report.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{report.pages} pages</span>
                  <span>{report.size}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Published: {report.published}</span>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Reports */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Monthly Financial Reports</h2>
            <p className="text-xl text-gray-600">Regular monthly updates on income, expenses, and activities</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Month</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Income</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Expenses</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Beneficiaries</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Published</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {monthlyReports.map((report, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">{report.month}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{report.income}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{report.expenses}</td>
                      <td className="px-6 py-4 text-gray-600">{report.beneficiaries}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{report.published}</td>
                      <td className="px-6 py-4">
                        <button className="text-emerald-600 hover:text-emerald-700 flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Impact Metrics</h2>
            <p className="text-xl text-emerald-100">Measuring our community impact and growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-emerald-500 rounded-2xl p-6">
                <h3 className="text-3xl font-bold mb-2">{metric.value}</h3>
                <p className="text-emerald-100 mb-2">{metric.metric}</p>
                <span className="text-emerald-200 text-sm">{metric.change} from last year</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Acknowledgements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Donor Acknowledgements</h2>
            <p className="text-xl text-gray-600">Recognizing our generous supporters</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {donorAcknowledgements.map((donor, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">{donor.name}</h4>
                    <p className="text-sm text-gray-600">{donor.type} • {donor.date}</p>
                  </div>
                  <span className="text-emerald-600 font-bold text-lg">{donor.amount}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                View All Donors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Reports */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Independent Audit Reports</h2>
            <p className="text-xl text-gray-600">Third-party verification of our financial practices</p>
          </div>
          
          <div className="space-y-6">
            {auditReports.map((audit, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Audit Report {audit.year}
                  </h3>
                  <p className="text-gray-600 mb-1">Audited by: {audit.auditor}</p>
                  <p className="text-gray-500 text-sm">Published: {audit.published}</p>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {audit.status}
                  </span>
                  <br />
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About Our Reports?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            We believe in complete transparency. If you have any questions about our financial 
            reports or need additional information, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors">
              Contact Us
            </button>
            <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 transition-colors">
              Request Information
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportsPage;