const responses = [
    "🎉 We've received your celebration request. Our team will contact you soon!",
    "✅ Thanks! We've noted your celebration. Expect a confirmation call shortly.",
    "🎈 Got it! We'll be in touch soon to finalize the details.",
    "Thanks for sharing! Our staff will call you soon to confirm your celebration.",
    "🎊 Your request has been noted! Expect a call for confirmation shortly."
  ];
  
  module.exports = {
    random: () => responses[Math.floor(Math.random() * responses.length)]
  };
  