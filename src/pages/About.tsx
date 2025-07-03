
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Recycle, 
  Leaf, 
  Users, 
  Target, 
  Heart, 
  Globe,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  Shield
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "ஸ்மார்ட் கண்காணிப்பு",
      description: "குப்பைத் தொட்டிகளின் நிலையை நேரடியாக கண்காணிக்கவும்"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "சமூக ஒத்துழைப்பு",
      description: "அனைவரும் சேர்ந்து சுத்தமான சுற்றுச்சூழலை உருவாக்குங்கள்"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "திறமையான நிர்வாகம்",
      description: "குப்பை சேகரிப்பு பணியை திறமையாக ஒருங்கமைக்கவும்"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "நம்பகமான சேவை",
      description: "24/7 கண்காணிப்பு மற்றும் உடனடி பதிலளிப்பு"
    }
  ];

  const stats = [
    { number: "100+", label: "குப்பைத் தொட்டிகள்", icon: <Recycle className="h-5 w-5" /> },
    { number: "50+", label: "தொழிலாளர்கள்", icon: <Users className="h-5 w-5" /> },
    { number: "10+", label: "பகுதிகள்", icon: <MapPin className="h-5 w-5" /> },
    { number: "95%", label: "வெற்றி விகிதம்", icon: <TrendingUp className="h-5 w-5" /> }
  ];

  const teamMembers = [
    {
      name: "டாக்டர் ராஜேஷ் குமார்",
      role: "திட்ட இயக்குனர்",
      description: "சுற்றுச்சூழல் பொறியியல் நிபுணர், 15 வருட அனுபவம்"
    },
    {
      name: "பேராசிரியர் ப்ரியா நந்தினி",
      role: "தொழில்நுட்ப ஆலோசகர்",
      description: "IoT மற்றும் ஸ்மார்ட் சிட்டி தொழில்நுட்ப நிபுணர்"
    },
    {
      name: "திரு. கார்த்திக் மோகன்",
      role: "வளர்ச்சி மேலாளர்",
      description: "பொது நிர்வாகம் மற்றும் சமூக மேம்பாடு நிபுணர்"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <Recycle className="h-12 w-12 text-green-600" />
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Leaf className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ஸ்மார்ட் குப்பை மேலாண்மை அமைப்பு
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            தொழில்நுட்பத்தை பயன்படுத்தி சுத்தமான மற்றும் நிலையான சமுதாயத்தை உருவாக்குவதே எங்கள் நோக்கம்
          </p>
          <Badge className="bg-green-100 text-green-800 px-4 py-2 text-base">
            <Heart className="h-4 w-4 mr-2" />
            சுற்றுச்சூழல் நட்பு தீர்வு
          </Badge>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3 text-green-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-blue-600" />
                <span>எங்கள் நோக்கம்</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                நவீன தொழில்நுட்பத்தையும் IoT சென்சார்களையும் பயன்படுத்தி குப்பை மேலாண்மையை மேம்படுத்துவது. 
                சமுதாயத்தின் ஒவ்வொரு உறுப்பினரும் சுத்தமான சூழலுக்கு பங்களிக்க உதவுவது எங்கள் முதன்மை நோக்கம்.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-green-600" />
                <span>எங்கள் தொலைநோக்கு</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                2030 ஆம் ஆண்டுக்குள் அனைத்து நகர்ப்புறங்களிலும் 100% டிஜிட்டல் குப்பை மேலாண்மை அமைப்பை 
                நிறுவுவது. கார்பன் உமிழ்வை 50% குறைத்து சுற்றுச்சூழலுக்கு நட்பான சமுதாயத்தை உருவாக்குவது.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">எங்கள் சேவைகள்</CardTitle>
            <CardDescription className="text-center">
              நவீன தொழில்நுட்பத்துடன் வழங்கப்படும் முழுமையான குப்பை மேலாண்மை தீர்வுகள்
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">எங்கள் குழு</CardTitle>
            <CardDescription className="text-center">
              அனுபவம் வாய்ন்த நிபுணர்கள் மற்றும் தொழில்நுட்ப ஆலோசகர்கள்
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-center space-x-2">
              <Award className="h-6 w-6 text-yellow-600" />
              <span>சாதனைகள் மற்றும் அங்கீகாரம்</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold">தமிழ்நாடு அரசின் சிறந்த சுற்றுச்சூழல் திட்டம் - 2023</h4>
                  <p className="text-sm text-gray-600">டிஜிட்டல் குப்பை மேலாண்மையில் புதுமை</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">ஐ.நா. நிலையான வளர்ச்சி இலக்கு பங்களிப்பு</h4>
                  <p className="text-sm text-gray-600">SDG 11 & 13 இலக்குகளுக்கான பங்களிப்பு</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">தொடர்பு கொள்ளுங்கள்</CardTitle>
            <CardDescription className="text-center">
              கேள்விகள் அல்லது ஆலோசனைகளுக்கு எங்களை தொடர்பு கொள்ளுங்கள்
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8 text-green-600" />
                <h4 className="font-semibold">தொலைபேசி</h4>
                <p className="text-sm text-gray-600">+91-44-2345-6789</p>
                <p className="text-sm text-gray-600">+91-94-4567-8901</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8 text-blue-600" />
                <h4 className="font-semibold">மின்னஞ்சல்</h4>
                <p className="text-sm text-gray-600">info@smartwaste.tn.gov.in</p>
                <p className="text-sm text-gray-600">support@smartwaste.tn.gov.in</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8 text-purple-600" />
                <h4 className="font-semibold">முகவரி</h4>
                <p className="text-sm text-gray-600">ஸ்மார்ட் சிட்டி மிஷன்</p>
                <p className="text-sm text-gray-600">செக்கிரபுரம், சென்னை - 600028</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2">
                <Mail className="h-4 w-4 mr-2" />
                எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
