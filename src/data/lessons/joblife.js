export default {
   lessonName: "JOB LIFE CYCLE",
   simulation: {
      timeQuantums: [3, 3, 5, 5, 5, 5, 5, 5],
      boostTime: Infinity,
      resetTQsOnIO: false,
      speed: 1000,
      generation: [
         {
            ioFrequencyRange: [10, 10],
            jobRuntimeRange: [3, 3],
            numJobsRange: [2, 2],
            jobCreateTimeRange: [1, 1],
            ioLengthRange: [50, 100],
         },
         {
            ioFrequencyRange: [16, 16],
            jobRuntimeRange: [6, 6],
            numJobsRange: [0, 0],
            jobCreateTimeRange: [10, 10],
            ioLengthRange: [50, 100],
         },
         {
            ioFrequencyRange: [10, 10],
            jobRuntimeRange: [3, 3],
            numJobsRange: [2, 2],
            jobCreateTimeRange: [11, 11],
            ioLengthRange: [50, 100],
         },
      ],
   },
   scheduler: {
      attributes: [
         "none",
      ],
      options: {
         showBoostTimer: false,
      },
   },
   splom: {
      attributes: [],
   },
   parallel: {
      attributes: [],
   },
   parameter: {
      "render": true,
      "Scheduler Parameters": {
      },
      "Job Generator": {
         "Number of Jobs": 10,
         "Duration": 5,
      },
   },
   details: {
      lesson: [
         {
            message: "Lets talk about the life cycle of a job. When a job is finished running on the CPU it will " +
               "either return to a queue to be run again or exit the system. Lets create a couple jobs now",
            atCycle: 1,
         },
         {
            message: "See how the jobs left the system? They ran to completion because their runtime was low." +
               " Let's create a job that lasts a little longer!",
            atCycle: 10,
         },
         {
            message: "Watch how this next job gets rescheduled because it hasn't completed yet. Click the" +
               " right arrow to see a scatterplot of the jobs. The y axis is create time, while the x axis is " +
               "runtime. Can you tell which job was the longer job?",
            atCycle: 15,
         },
      ],
      attributes: [
         ".init.createTime",
         ".init.runTime",
      ],
   },
   navigation: [
      "scheduler",
      "parameter",
      "details",
      "splom",
      "parallel",
   ],
};
