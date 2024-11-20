import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Bell, 
  Globe, 
  Shield, 
  Camera,
  Save,
  Trash2
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import StudentSide from '../components/StudentSide';

const StudentSettings = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: 'Christophe',
    lastName: 'Muneza',
    email: 'christophermuneza1@gmail.com',
    phone: '+250 788 673 682',
    avatar: '/images/christopher.jpg',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: {
      email: true,
      push: false,
      updates: true,
      marketing: false
    },
    preferences: {
      language: 'English',
      timezone: 'UTC-5',
      darkMode: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationToggle = (key) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handlePreferenceChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const tabContent = {
    personal: (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b">
          <div className="relative">
            <img
              src={formData.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute bottom-0 right-0 rounded-full bg-white"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-medium">Profile Picture</h3>
            <p className="text-sm text-gray-500">
              Upload a new profile picture. JPG, GIF or PNG. Max 1MB.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
    ),
    security: (
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Current Password</label>
          <Input
            name="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={handleInputChange}
            placeholder="Enter current password"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">New Password</label>
          <Input
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="Enter new password"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Confirm New Password</label>
          <Input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm new password"
          />
        </div>
      </div>
    ),
    notifications: (
      <div className="space-y-6">
        {Object.entries(formData.notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between py-3">
            <div className="space-y-0.5">
              <div className="text-sm font-medium capitalize">{key} Notifications</div>
              <div className="text-sm text-gray-500">
                Receive {key} notifications about your activity
              </div>
            </div>
            <Switch
              checked={value}
              onCheckedChange={() => handleNotificationToggle(key)}
            />
          </div>
        ))}
      </div>
    ),
    preferences: (
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Language</label>
          <select
            className="w-full p-2 border rounded-md"
            value={formData.preferences.language}
            onChange={(e) => handlePreferenceChange('language', e.target.value)}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Timezone</label>
          <select
            className="w-full p-2 border rounded-md"
            value={formData.preferences.timezone}
            onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
          >
            <option>UTC-5</option>
            <option>UTC+0</option>
            <option>UTC+1</option>
            <option>UTC+2</option>
          </select>
        </div>
        <div className="flex items-center justify-between py-3">
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Dark Mode</div>
            <div className="text-sm text-gray-500">
              Enable dark mode for better viewing at night
            </div>
          </div>
          <Switch
            checked={formData.preferences.darkMode}
            onCheckedChange={(checked) => handlePreferenceChange('darkMode', checked)}
          />
        </div>
      </div>
    )
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <StudentSide />
      
      <div className="flex-1 p-4 md:p-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Account Settings</h1>
        </div>

        {saveSuccess && (
          <Alert className="bg-green-50 border-green-200 mb-4">
            <AlertDescription>Settings saved successfully!</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Settings Navigation */}
          <Card className="w-full sm:w-48 shrink-0">
            <CardContent className="p-4">
              <nav className="space-y-2">
                <Button
                  variant={activeTab === 'personal' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('personal')}
                >
                  <User className="w-4 h-4 mr-2" />
                  Personal
                </Button>
                <Button
                  variant={activeTab === 'security' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('security')}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Security
                </Button>
                <Button
                  variant={activeTab === 'notifications' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('notifications')}
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button
                  variant={activeTab === 'preferences' ? 'default' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab('preferences')}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Preferences
                </Button>
              </nav>
            </CardContent>
          </Card>

          {/* Settings Content */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {activeTab === 'personal' && <User className="w-5 h-5" />}
                {activeTab === 'security' && <Shield className="w-5 h-5" />}
                {activeTab === 'notifications' && <Bell className="w-5 h-5" />}
                {activeTab === 'preferences' && <Globe className="w-5 h-5" />}
                <span className="capitalize">{activeTab} Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                {tabContent[activeTab]}
                
                <div className="flex items-center justify-end gap-4 mt-6 pt-6 border-t">
                  <Button type="button" variant="outline" className="gap-2">
                    <Trash2 className="w-4 h-4" />
                    Reset
                  </Button>
                  <Button type="submit" className="gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentSettings;