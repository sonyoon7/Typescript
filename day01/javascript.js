var IUser = (function() {
  var iUser = function() {
    // 자기 자신의 객체 생성을 막기 위한 추가 소스
    if (this.constructor === iUser) {
      throw new Error("정의된 인터페이스는 자기 자신의 객체를 가질 수 없습니다.")
    } else {
      return this
    }
  }
  var prototype_members = {
    // 메서드
    getId: function() {},
    setId: function() {}
  }
  for (var n in prototype_members) iUser.prototype[n] = prototype_members[n]
  return iUser
})()

// IBoard 인터페이스
var IBoard = (function() {
  var iBoard = function() {
    // 자기 자신의 객체 생성을 막기 위한 추가 소스
    if (this.constructor === iBoard) {
      throw new Error("정의된 인터페이스는 자기 자신의 객체를 가질 수 없습니다.")
    } else {
      return this
    }
  }
  var prototype_members = {
    // 메서드
    getBoard: function() {},
    setBoard: function() {}
  }
  for (var n in prototype_members) iBoard.prototype[n] = prototype_members[n]
  return iBoard
})()

// User Entitie
var UserEntitie = new ((function() {
  var userEntitie = function() {
    this.id = ""
    return this
  }
  return userEntitie
})())()

// 정의된 인터페이스(IUser) 메소드들을 상속받은 일반 클래스(User1)에서 구현한다.
var User1 = interfaceInherit(IUser, {
  // Repository
  getId: function() {
    return UserEntitie.id + "의 아이디 입니다."
  },
  setId: function(id) {
    UserEntitie.id = id
    return this
  }
})

// 정의된 인터페이스(IUser, IBoard) 메소드들을 다중 상속([IUser, IBoard]받은 일반 클래스(User2)에서 구현한다.
var User2 = interfaceInherit([IUser, IBoard], {
  // Repository
  getId: function() {
    return UserEntitie.id + "의 아이디랑꼐!!!!"
  },
  setId: function(id) {
    UserEntitie.id = id
    return this
  },
  getBoard: function() {
    return this
  },
  setBoard: function() {
    return this
  }
})

// 인터페이스 상속(다중) 및 구현
function interfaceInherit(_interfaces, opt) {
  var o = {} // 인터페이스 메서드 카운트
  var interfaceMethodCount = 0 // 일반클래스(구현클래스)의 인터페이스 메서드 구현 카운트
  var classMethodCount = 0
  _interfaces = _interfaces.length ? _interfaces : [_interfaces]
  for (var i = 0, length = _interfaces.length; i < length; i++) {
    var _interface = _interfaces[i]
    var F = function() {}
    for (var n in _interface.prototype) {
      F.prototype[n] = _interface.prototype[n]
    }
    var $F = _interface.call(new F())
    for (var n in $F) {
      // 인터페이스에 정의된 함수만 구현 가능하다.
      if (Object.hasOwnProperty.call(opt, n)) {
        o[n] = opt[n]
        classMethodCount++
      }
      interfaceMethodCount++
    }
    if (interfaceMethodCount !== classMethodCount) {
      // 일반 클래스(구현 클래스)에 정의된 인터페이스 메서드의 구현 메서드가 없을떄..
      throw new Error("상속된 인터페이스 메서드가 구현(모두)되지 않았습니다.")
      return {}
    }
  }
  return o
}

alert(User1.setId("xanione").getId())
alert(
  User2.setId("yanione")
    .setBoard()
    .getBoard()
    .getId()
)
