enum DirectionNum {
    Up=1,
    Down,
    Left,
    Right
}

// 字符串枚举
enum DirectionStr {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = 'YES'
}

enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = '123'.length
}