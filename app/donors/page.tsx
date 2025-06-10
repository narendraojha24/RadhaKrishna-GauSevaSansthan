"use client"

import React from "react"

export default function DonorsPage() {
  return (
    <section id="donors" className="py-16 bg-green-50 min-h-screen" data-aos="fade-up">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">हमारे दानदाता</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            श्री राधाकृष्ण गौ सेवा संस्थान को सहयोग देने वाले सभी दानदाताओं का हम हृदय से आभार व्यक्त करते हैं।
          </p>
        </div>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border border-green-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left text-green-700 font-semibold">क्रमांक</th>
                <th className="px-4 py-2 border-b text-left text-green-700 font-semibold">नाम</th>
                <th className="px-4 py-2 border-b text-left text-green-700 font-semibold">राशि</th>
              </tr>
            </thead>
            <tbody>
              {/* --- Copy all <tr>...</tr> rows from your main page here --- */}
              {/* Example: */}
              <tr>
            <td className="px-4 py-2 border-b">1</td>
            <td className="px-4 py-2 border-b">श्री जयवर्धनसिंह जी ( पूर्व केविनेट मंत्री एवं विधायक महोदय )</td>
            <td className="px-4 py-2 border-b">₹ 1,11,111</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">2</td>
            <td className="px-4 py-2 border-b">श्री राधेश्याम धाकड़ जी फेकरा (देव विल्डकोन प्रा. लि.)</td>
            <td className="px-4 py-2 border-b">₹ 1,00,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">3</td>
            <td className="px-4 py-2 border-b">श्री रोहित शर्मा जी डोंगर (रुद्रा कंस्ट्रक्सन)</td>
            <td className="px-4 py-2 border-b">₹ 50,151</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">4</td>
            <td className="px-4 py-2 border-b">श्री देवेश शर्मा जी राघोगढ़ ( अध्यक्ष रोटरी क्लब )</td>
            <td className="px-4 py-2 border-b">₹ 50,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">5</td>
            <td className="px-4 py-2 border-b">श्री बनवारीलाल जी मेर राघोगढ़</td>
            <td className="px-4 py-2 border-b">₹ 50,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">6</td>
            <td className="px-4 py-2 border-b">श्री प्रकाश यादव जी (गोलू भाई ) राघोगढ़</td>
            <td className="px-4 py-2 border-b">₹ 50,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">7</td>
            <td className="px-4 py-2 border-b">श्री महेश साहू जी राघोगढ़ (साक्षी मेंहदी)</td>
            <td className="px-4 py-2 border-b">₹ 35,350</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">8</td>
            <td className="px-4 py-2 border-b">श्री समस्त ग्रामवासी ग्राम वृसंगपुरा</td>
            <td className="px-4 py-2 border-b">₹ 22,100</td>
          </tr>
          
          <tr>
            <td className="px-4 py-2 border-b">9</td>
            <td className="px-4 py-2 border-b">श्री मंजीतसिंह मीना जी डोंगर (पटेल साहब)</td>
            <td className="px-4 py-2 border-b">₹ 21,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">10</td>
            <td className="px-4 py-2 border-b">श्री अखलेश जैन गुना</td>
            <td className="px-4 py-2 border-b"> ₹ 15,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">11</td>
            <td className="px-4 py-2 border-b">श्री दयानंद शर्मा जी (नई दिल्ली)</td>
            <td className="px-4 py-2 border-b">₹ 12,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">12</td>
            <td className="px-4 py-2 border-b">श्री राजाराम धाकड़ उदयपुरी ( सचिव )	</td>
            <td className="px-4 py-2 border-b">₹ 11,111</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">13</td>
            <td className="px-4 py-2 border-b">श्री अक्षय तेम्रवाल साहव (IAS)  एसडीएम राघोगढ़</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">14</td>
            <td className="px-4 py-2 border-b">श्रीमती अनुकृति मिश्रा (नायव तहसीलदार राघोगढ़ )</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">15</td>
            <td className="px-4 py-2 border-b">श्री संजय जैन राघोगढ़ (वकील साहव)</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">16</td>
            <td className="px-4 py-2 border-b">श्री संजय जैन राघोगढ़ (वकील साहव)</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">17</td>
            <td className="px-4 py-2 border-b">श्री राजीवकुमार जी (रजिस्ट्रार साहव्)</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">18</td>
            <td className="px-4 py-2 border-b">श्री रूपनारायण जी धाकड़ (NFL)</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">19</td>
            <td className="px-4 py-2 border-b">श्री सुकेन शर्मा जी डोंगर  (लाइनमेन साहब)</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">20</td>
            <td className="px-4 py-2 border-b">श्री ब्रजेश साहू जी राघोगढ़ (हीरो शोरूम)</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">21</td>
            <td className="px-4 py-2 border-b">श्री अलोक रावत जी राघोगढ़ </td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">22</td>
            <td className="px-4 py-2 border-b">श्री सुरेन्द्र जी राजावत राघोगढ़ </td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">23</td>
            <td className="px-4 py-2 border-b">श्री मनोज शर्मा जी गुना</td>
            <td className="px-4 py-2 border-b">₹ 11,000</td>
          </tr>
<tr>
  <td className="px-4 py-2 border-b">24</td>
  <td className="px-4 py-2 border-b">श्री राजेश जैन ऋचा कलेक्शन बीनागंज</td>
  <td className="px-4 py-2 border-b">₹ 11,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">25</td>
  <td className="px-4 py-2 border-b">श्री संजयकुमार जैन राघोगढ़ (एडवोकेट)</td>
  <td className="px-4 py-2 border-b">₹ 10,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">26</td>
  <td className="px-4 py-2 border-b">श्री जगदीश मीना जी RTO साहब</td>
  <td className="px-4 py-2 border-b">₹ 10,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">27</td>
  <td className="px-4 py-2 border-b">कु. रश्मि नामदेव पटवारी चाचोड़ा</td>
  <td className="px-4 py-2 border-b">₹ 9,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">28</td>
  <td className="px-4 py-2 border-b">श्री लालाराम जी राय साडा कॉलोनी</td>
  <td className="px-4 py-2 border-b">₹ 8,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">29</td>
  <td className="px-4 py-2 border-b">स्व. श्री बाबुदास जी महंत (निपान्या वाले)</td>
  <td className="px-4 py-2 border-b">₹ 6,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">30</td>
  <td className="px-4 py-2 border-b">श्री रीतेश जी अग्रवाल व्यावरा</td>
  <td className="px-4 py-2 border-b">₹ 5,500</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">31</td>
  <td className="px-4 py-2 border-b">श्री राजेश महेश्वरी जी राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">32</td>
  <td className="px-4 py-2 border-b">श्री कमलेश शर्मा जी पालिका बाजार</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">33</td>
  <td className="px-4 py-2 border-b">श्री रामभरोसा सैनी जी राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">34</td>
  <td className="px-4 py-2 border-b">श्री कोमलप्रसाद जी संत गुना</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">35</td>
  <td className="px-4 py-2 border-b">श्री हनुमतसिंह बना जी  दावतपूरा</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">36</td>
  <td className="px-4 py-2 border-b">श्री अनिकेत मीना जी  डोंगर (पूर्व पार्षद)</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">37</td>
  <td className="px-4 py-2 border-b">श्री कदमसिंह जी मीना गैल</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">38</td>
  <td className="px-4 py-2 border-b">श्री दयानंद शर्मा जी (दिल्ली बाले )</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">39</td>
  <td className="px-4 py-2 border-b">श्री श्रीलाल कुशवाह (नेताजी) राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">40</td>
  <td className="px-4 py-2 border-b">श्री सत्यनारायण जी शर्मा शिक्षक सकतपुर</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">41</td>
  <td className="px-4 py-2 border-b">रत्नमाला (शिक्षक समूह ) राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">42</td>
  <td className="px-4 py-2 border-b">श्री राजीव साहू राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">43</td>
  <td className="px-4 py-2 border-b">श्री पंकज दीक्षित जी  राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">44</td>
  <td className="px-4 py-2 border-b">श्री श्रीलाल कुशवाह नेता जी राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">45</td>
  <td className="px-4 py-2 border-b">श्री हेमंत भारद्वाज जी राघोगढ़ (वकील साहब)</td>
  <td className="px-4 py-2 border-b">₹ 5,001</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">46</td>
  <td className="px-4 py-2 border-b">श्री शिवप्रतापसिंह जी गुर्जर राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">47</td>
  <td className="px-4 py-2 border-b">श्री प्रशांत जी अग्रवाल राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">48</td>
  <td className="px-4 py-2 border-b">श्री जीतेन्द्र मालवीय डोंगर</td>
  <td className="px-4 py-2 border-b">₹ 5,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">49</td>
  <td className="px-4 py-2 border-b">श्रीमति मंजू गोतम पटवारी राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 5,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">50</td>
  <td className="px-4 py-2 border-b">श्री संतोष कुमार साहू बीनागंज</td>
  <td className="px-4 py-2 border-b">₹ 5,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">51</td>
  <td className="px-4 py-2 border-b">श्री सुभाष चन्द्र जी NFL</td>
  <td className="px-4 py-2 border-b">₹ 2,600</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">52</td>
  <td className="px-4 py-2 border-b">श्री राहुलराज सोनी मेडीबाले</td>
  <td className="px-4 py-2 border-b">₹ 2,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">53</td>
  <td className="px-4 py-2 border-b">श्री आलोक रावत जी राघोगढ़</td>
  <td className="px-4 py-2 border-b">₹ 2,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">54</td>
  <td className="px-4 py-2 border-b">श्री गोपालबाबू मीना बीनागाव</td>
  <td className="px-4 py-2 border-b">₹ 2,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">55</td>
  <td className="px-4 py-2 border-b">श्री रुपेश महेश्वरी जी बीनागंज</td>
  <td className="px-4 py-2 border-b">₹ 2,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">56</td>
  <td className="px-4 py-2 border-b">श्री शिवम् मीना मेरियाखेडी</td>
  <td className="px-4 py-2 border-b">₹ 2,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">57</td>
  <td className="px-4 py-2 border-b">श्री लक्ष्मीनारायण ओझा डोंगर</td>
  <td className="px-4 py-2 border-b">₹ 2,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">58</td>
  <td className="px-4 py-2 border-b">कु. रश्मि नामदेव पटवारी चाचोड़ा</td>
  <td className="px-4 py-2 border-b">₹ 2,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">59</td>
  <td className="px-4 py-2 border-b">श्री लक्ष्मीनारायण ओझा डोंगर</td>
  <td className="px-4 py-2 border-b">₹ 2,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">60</td>
  <td className="px-4 py-2 border-b">श्री स्वतंत्र श्रीवास्तव चाचोड़ा</td>
  <td className="px-4 py-2 border-b">₹ 2,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">61</td>
  <td className="px-4 py-2 border-b">श्री वसंतसिंह कुशवाह पटवारी चाचोड़ा</td>
  <td className="px-4 py-2 border-b">₹ 2,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">62</td>
  <td className="px-4 py-2 border-b">श्री पवन मीना बीनागाव</td>
  <td className="px-4 py-2 border-b">₹ 2,000</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">63</td>
  <td className="px-4 py-2 border-b">श्री मुकेश श्रीमाल जी तखत बाले</td>
  <td className="px-4 py-2 border-b">₹ 1,100</td>
</tr>
<tr>
  <td className="px-4 py-2 border-b">64</td>
  <td className="px-4 py-2 border-b">श्री सोनू मेर तहसील चाचोड़ा</td>
  <td className="px-4 py-2 border-b">₹ 1,000</td>
</tr>
          
          {/* ...और इसी तरह बाकी दानदाताओं के लिए rows जोड़ें... */}
          <tr>
            <td className="px-4 py-2 border-b">65</td>
            <td className="px-4 py-2 border-b">गुप्त दान</td>
            <td className="px-4 py-2 border-b">₹ 700</td>
          </tr>
            </tbody>
          </table>
          <div className="text-sm text-gray-500 mt-2">
            * यह सूची केवल प्रमुख दानदाताओं के लिए है। सभी सहयोगियों का हम हृदय से धन्यवाद करते हैं।
          </div>
        </div>
      </div>
    </section>
  )
}