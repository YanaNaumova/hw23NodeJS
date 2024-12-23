async function promiseOne(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("данные 1");
    }, 1000);
  });
}

async function promiseTwo(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("данные 2");
    }, 2000);
  });
}

async function promiseThree(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("данные 3");
    }, 3000);
  });
}

async function promises(): Promise<void> {
  try {
    const data1 = await promiseOne();
    const data2 = await promiseTwo();
    const data3 = await promiseThree();
    console.log(data1, data2, data3);
  } catch (error) {
    console.error(error);
  }
}
promises();

async function handleArrayData(arr: string[]): Promise<void> {
  try {
    const promiseArr = arr.map((str) => {
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(str.toUpperCase());
        }, 1000);
      });
    });
    const result = await Promise.all(promiseArr);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

handleArrayData(["h", "e", "l", "l", "o"]);

async function promiseFour(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ERROR");
    }, 1000);
  });
}

async function promiseAllFunc(): Promise<void> {
  try {
    const result = await Promise.all([
      promiseOne(),
      promiseTwo(),
      promiseThree(),
      promiseFour(),
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

promiseAllFunc();

async function handleArrayNumber(arr: number[]): Promise<void> {
  try {
    const promissAllArray = arr.map((el) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(el);
        }, el);
      });
    });

    const result = await Promise.all(promissAllArray);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

handleArrayNumber([1000, 2000, 3000]);
