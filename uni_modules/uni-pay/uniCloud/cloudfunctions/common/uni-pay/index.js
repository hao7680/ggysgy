!(function (e, t) {
  for (var r in t) e[r] = t[r]
})(
  exports,
  (function (e) {
    var t = {}
    function r(n) {
      if (t[n]) return t[n].exports
      var i = (t[n] = { i: n, l: !1, exports: {} })
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var n = Object.create(null)
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t]
              }.bind(null, i)
            )
        return n
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return r.d(t, 'a', t), t
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (r.p = ''),
      r((r.s = 12))
    )
  })([
    function (e, t) {
      e.exports = require('crypto')
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = { FormData: !0, UniCloudError: !0 }
      Object.defineProperty(t, 'FormData', {
        enumerable: !0,
        get: function () {
          return i.default
        },
      }),
        Object.defineProperty(t, 'UniCloudError', {
          enumerable: !0,
          get: function () {
            return s.default
          },
        })
      var i = u(r(15)),
        s = u(r(16)),
        a = r(17)
      Object.keys(a).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e]
              },
            }))
      })
      var o = r(2)
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.keys(o).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e]
              },
            }))
      })
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.hasOwn = s),
        (t.isPlainObject = a),
        (t.isFn = function (e) {
          return 'function' == typeof e
        }),
        (t.deepClone = function (e) {
          return JSON.parse(JSON.stringify(e))
        }),
        (t.getExtension = function (e) {
          return o[e]
        }),
        (t.snake2camel = l),
        (t.camel2snake = f),
        (t.snake2camelJson = function (e) {
          return h(e, 'snake2camel')
        }),
        (t.camel2snakeJson = function (e) {
          return h(e, 'camel2snake')
        }),
        (t.getOffsetDate = function (e) {
          return new Date(Date.now() + 6e4 * (new Date().getTimezoneOffset() + 60 * (e || 0)))
        }),
        (t.getDateStr = p),
        (t.getTimeStr = d),
        (t.getFullTimeStr = function (e) {
          return p((e = e || new Date())) + ' ' + d(e)
        }),
        (t.log = function () {
          0
        }),
        (t.accMul = function (e, t) {
          if (isNaN(e) || isNaN(t)) return NaN
          const { value: r, power: n } = y(e),
            { value: i, power: s } = y(t)
          return (r * i) / Math.pow(10, n + s)
        }),
        (t.mime2ext = void 0)
      const n = Object.prototype.toString,
        i = Object.prototype.hasOwnProperty
      function s(e, t) {
        return i.call(e, t)
      }
      function a(e) {
        return '[object Object]' === n.call(e)
      }
      const o = {
        'image/png': 'png',
        'image/jpeg': 'jpg',
        'image/gif': 'gif',
        'image/svg+xml': 'svg',
        'image/bmp': 'bmp',
        'image/webp': 'webp',
      }
      t.mime2ext = o
      const u = /_(\w)/g,
        c = /[A-Z]/g
      function l(e) {
        return e.replace(u, (e, t) => (t ? t.toUpperCase() : ''))
      }
      function f(e) {
        return e.replace(c, (e) => '_' + e.toLowerCase())
      }
      function h(e, t) {
        let r, n
        switch (t) {
          case 'snake2camel':
            ;(n = l), (r = u)
            break
          case 'camel2snake':
            ;(n = f), (r = c)
        }
        for (const i in e)
          if (s(e, i) && r.test(i)) {
            const r = n(i)
            ;(e[r] = e[i]),
              delete e[i],
              a(e[r])
                ? (e[r] = h(e[r], t))
                : Array.isArray(e[r]) && (e[r] = e[r].map((e) => h(e, t)))
          }
        return e
      }
      function p(e, t = '-') {
        e = e || new Date()
        const r = []
        return (
          r.push(e.getFullYear()),
          r.push(('00' + (e.getMonth() + 1)).substr(-2)),
          r.push(('00' + e.getDate()).substr(-2)),
          r.join(t)
        )
      }
      function d(e, t = ':') {
        e = e || new Date()
        const r = []
        return (
          r.push(('00' + e.getHours()).substr(-2)),
          r.push(('00' + e.getMinutes()).substr(-2)),
          r.push(('00' + e.getSeconds()).substr(-2)),
          r.join(t)
        )
      }
      function y(e) {
        const t = e.toString().split('.'),
          r = t[1] ? t[1].length : 0
        return { value: Number(t.join('')), power: r }
      }
    },
    function (e, t) {
      e.exports = require('util')
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(39)
      ;(t.bytesFromIP = function (e) {
        switch (n.isIP(e)) {
          case 4:
            return Buffer.from(e.split('.').map((e) => parseInt(e, 10)))
          case 6:
            const t = e.split(':'),
              r = Buffer.alloc(16)
            let n = 0
            '' === t[t.length - 1] && (t[t.length - 1] = '0')
            for (let e = 0; e < t.length; e++)
              '' !== t[e]
                ? (r.writeUInt16BE(parseInt(t[e], 16), n), (n += 2))
                : e + 1 < t.length && '' !== t[e + 1] && (n = 16 - 2 * (t.length - e - 1))
            return r
          default:
            return null
        }
      }),
        (t.bytesToIP = function (e) {
          switch (e.length) {
            case 4:
              return [e[0], e[1], e[2], e[3]].join('.')
            case 16:
              const t = []
              let r = -1,
                n = 0,
                i = -1,
                s = 0
              for (let a = 0; a < e.length; a += 2) {
                const o = (e[a] << 8) | e[a + 1]
                0 === o
                  ? (n++, -1 === r && (r = t.length), n > s && ((s = n), (i = r)))
                  : ((r = -1), (n = 0)),
                  t.push(o.toString(16))
              }
              if (s > 0) {
                let e = ''
                const r = t.slice(i + s)
                ;(t.length = i),
                  0 === t.length && (e += ':'),
                  0 === r.length && (e += ':'),
                  t.push(e, ...r)
              }
              return t.join(':')
            default:
              return ''
          }
        })
      const i = Object.create(null),
        s = /^[0-9.]+$/
      function a(e, t) {
        ;(i[e] = t), (i[t] = e)
      }
      ;(t.getOID = function (e) {
        return s.test(e) && '' !== i[e] ? e : null == i[e] ? '' : i[e]
      }),
        (t.getOIDName = function (e) {
          return s.test(e) || '' === i[e] ? (null == i[e] ? e : i[e]) : e
        }),
        a('1.2.840.113549.1.1.1', 'rsaEncryption'),
        a('1.2.840.113549.1.1.4', 'md5WithRsaEncryption'),
        a('1.2.840.113549.1.1.5', 'sha1WithRsaEncryption'),
        a('1.2.840.113549.1.1.8', 'mgf1'),
        a('1.2.840.113549.1.1.10', 'RSASSA-PSS'),
        a('1.2.840.113549.1.1.11', 'sha256WithRsaEncryption'),
        a('1.2.840.113549.1.1.12', 'sha384WithRsaEncryption'),
        a('1.2.840.113549.1.1.13', 'sha512WithRsaEncryption'),
        a('1.2.840.10045.2.1', 'ecEncryption'),
        a('1.2.840.10045.4.1', 'ecdsaWithSha1'),
        a('1.2.840.10045.4.3.2', 'ecdsaWithSha256'),
        a('1.2.840.10045.4.3.3', 'ecdsaWithSha384'),
        a('1.2.840.10045.4.3.4', 'ecdsaWithSha512'),
        a('1.2.840.10040.4.3', 'dsaWithSha1'),
        a('2.16.840.1.101.3.4.3.2', 'dsaWithSha256'),
        a('1.3.14.3.2.7', 'desCBC'),
        a('1.3.14.3.2.26', 'sha1'),
        a('2.16.840.1.101.3.4.2.1', 'sha256'),
        a('2.16.840.1.101.3.4.2.2', 'sha384'),
        a('2.16.840.1.101.3.4.2.3', 'sha512'),
        a('1.2.840.113549.2.5', 'md5'),
        a('1.3.101.110', 'X25519'),
        a('1.3.101.111', 'X448'),
        a('1.3.101.112', 'Ed25519'),
        a('1.3.101.113', 'Ed448'),
        a('1.2.840.113549.1.7.1', 'data'),
        a('1.2.840.113549.1.7.2', 'signedData'),
        a('1.2.840.113549.1.7.3', 'envelopedData'),
        a('1.2.840.113549.1.7.4', 'signedAndEnvelopedData'),
        a('1.2.840.113549.1.7.5', 'digestedData'),
        a('1.2.840.113549.1.7.6', 'encryptedData'),
        a('1.2.840.113549.1.9.1', 'emailAddress'),
        a('1.2.840.113549.1.9.2', 'unstructuredName'),
        a('1.2.840.113549.1.9.3', 'contentType'),
        a('1.2.840.113549.1.9.4', 'messageDigest'),
        a('1.2.840.113549.1.9.5', 'signingTime'),
        a('1.2.840.113549.1.9.6', 'counterSignature'),
        a('1.2.840.113549.1.9.7', 'challengePassword'),
        a('1.2.840.113549.1.9.8', 'unstructuredAddress'),
        a('1.2.840.113549.1.9.14', 'extensionRequest'),
        a('1.2.840.113549.1.9.20', 'friendlyName'),
        a('1.2.840.113549.1.9.21', 'localKeyId'),
        a('1.2.840.113549.1.9.22.1', 'x509Certificate'),
        a('1.2.840.113549.1.12.10.1.1', 'keyBag'),
        a('1.2.840.113549.1.12.10.1.2', 'pkcs8ShroudedKeyBag'),
        a('1.2.840.113549.1.12.10.1.3', 'certBag'),
        a('1.2.840.113549.1.12.10.1.4', 'crlBag'),
        a('1.2.840.113549.1.12.10.1.5', 'secretBag'),
        a('1.2.840.113549.1.12.10.1.6', 'safeContentsBag'),
        a('1.2.840.113549.1.5.13', 'pkcs5PBES2'),
        a('1.2.840.113549.1.5.12', 'pkcs5PBKDF2'),
        a('1.2.840.113549.2.7', 'hmacWithSha1'),
        a('1.2.840.113549.2.9', 'hmacWithSha256'),
        a('1.2.840.113549.2.10', 'hmacWithSha384'),
        a('1.2.840.113549.2.11', 'hmacWithSha512'),
        a('1.2.840.113549.3.7', '3desCBC'),
        a('2.16.840.1.101.3.4.1.2', 'aesCBC128'),
        a('2.16.840.1.101.3.4.1.42', 'aesCBC256'),
        a('2.5.4.3', 'commonName'),
        a('2.5.4.5', 'serialName'),
        a('2.5.4.6', 'countryName'),
        a('2.5.4.7', 'localityName'),
        a('2.5.4.8', 'stateOrProvinceName'),
        a('2.5.4.10', 'organizationName'),
        a('2.5.4.11', 'organizationalUnitName'),
        a('2.5.4.15', 'businessCategory'),
        a('2.16.840.1.113730.1.1', 'nsCertType'),
        a('2.5.29.2', 'keyAttributes'),
        a('2.5.29.4', 'keyUsageRestriction'),
        a('2.5.29.6', 'subtreesConstraint'),
        a('2.5.29.9', 'subjectDirectoryAttributes'),
        a('2.5.29.14', 'subjectKeyIdentifier'),
        a('2.5.29.15', 'keyUsage'),
        a('2.5.29.16', 'privateKeyUsagePeriod'),
        a('2.5.29.17', 'subjectAltName'),
        a('2.5.29.18', 'issuerAltName'),
        a('2.5.29.19', 'basicConstraints'),
        a('2.5.29.20', 'cRLNumber'),
        a('2.5.29.21', 'cRLReason'),
        a('2.5.29.22', 'expirationDate'),
        a('2.5.29.23', 'instructionCode'),
        a('2.5.29.24', 'invalidityDate'),
        a('2.5.29.27', 'deltaCRLIndicator'),
        a('2.5.29.28', 'issuingDistributionPoint'),
        a('2.5.29.29', 'certificateIssuer'),
        a('2.5.29.30', 'nameConstraints'),
        a('2.5.29.31', 'cRLDistributionPoints'),
        a('2.5.29.32', 'certificatePolicies'),
        a('2.5.29.33', 'policyMappings'),
        a('2.5.29.35', 'authorityKeyIdentifier'),
        a('2.5.29.36', 'policyConstraints'),
        a('2.5.29.37', 'extKeyUsage'),
        a('2.5.29.46', 'freshestCRL'),
        a('2.5.29.54', 'inhibitAnyPolicy'),
        a('1.3.6.1.4.1.311.60.2.1.2', 'jurisdictionST'),
        a('1.3.6.1.4.1.311.60.2.1.3', 'jurisdictionC'),
        a('1.3.6.1.4.1.11129.2.4.2', 'timestampList'),
        a('1.3.6.1.5.5.7.1.1', 'authorityInfoAccess'),
        a('1.3.6.1.5.5.7.3.1', 'serverAuth'),
        a('1.3.6.1.5.5.7.3.2', 'clientAuth'),
        a('1.3.6.1.5.5.7.3.3', 'codeSigning'),
        a('1.3.6.1.5.5.7.3.4', 'emailProtection'),
        a('1.3.6.1.5.5.7.3.8', 'timeStamping'),
        a('1.3.6.1.5.5.7.48.1', 'authorityInfoAccessOcsp'),
        a('1.3.6.1.5.5.7.48.2', 'authorityInfoAccessIssuers')
    },
    function (e, t) {
      e.exports = require('fs')
    },
    function (e, t, r) {
      'use strict'
      const n = (e) =>
        !(
          'object' != typeof e ||
          null === e ||
          e instanceof RegExp ||
          e instanceof Error ||
          e instanceof Date
        )
      e.exports = function e(t, r, i, s) {
        if (((i = Object.assign({ deep: !1, target: {} }, i)), (s = s || new WeakMap()).has(t)))
          return s.get(t)
        s.set(t, i.target)
        const a = i.target
        delete i.target
        for (const o of Object.keys(t)) {
          const u = t[o],
            c = r(o, u, t)
          let l = c[1]
          i.deep &&
            n(l) &&
            (l = Array.isArray(l) ? l.map((t) => (n(t) ? e(t, r, i, s) : t)) : e(l, r, i, s)),
            (a[c[0]] = l)
        }
        return a
      }
    },
    function (e, t, r) {
      'use strict'
      var n = r(6),
        i = r(31)
      e.exports = function (e, t) {
        return (
          (t = Object.assign({ deep: !0 }, t)),
          n(
            e,
            function (e, t) {
              return [i(e), t]
            },
            t
          )
        )
      }
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(0),
        i = r(34),
        s = r(35),
        a = r(7),
        o = { RSA: 'RSA-SHA1', RSA2: 'RSA-SHA256' }
      ;(t.ALIPAY_ALGORITHM_MAPPING = o),
        (t.sign = function (e, t = {}, r) {
          const u = t.bizContent || null
          delete t.bizContent
          let c = Object.assign(
            {
              method: e,
              appId: r.appId,
              charset: r.charset,
              version: r.version,
              signType: r.signType,
              timestamp: i().format('YYYY-MM-DD HH:mm:ss'),
            },
            t
          )
          r.appCertSn &&
            r.alipayRootCertSn &&
            (c = Object.assign(
              { appCertSn: r.appCertSn, alipayRootCertSn: r.alipayRootCertSn },
              c
            )),
            u && (c.bizContent = JSON.stringify(a(u)))
          const l = a(c),
            f = Object.keys(l)
              .sort()
              .map((e) => {
                let t = l[e]
                return (
                  '[object String]' !== Array.prototype.toString.call(t) && (t = JSON.stringify(t)),
                  `${e}=${s.encode(t, r.charset)}`
                )
              })
              .join('&'),
            h = n.createSign(o[r.signType]).update(f, 'utf8').sign(r.privateKey, 'base64')
          return Object.assign(l, { sign: h })
        })
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(3),
        i = r(0),
        s = r(40),
        a = r(10),
        o = r(4)
      ;(t.publicKeyValidator = {
        name: 'PublicKeyInfo',
        class: a.Class.UNIVERSAL,
        tag: a.Tag.SEQUENCE,
        capture: 'publicKeyInfo',
        value: [
          {
            name: 'PublicKeyInfo.AlgorithmIdentifier',
            class: a.Class.UNIVERSAL,
            tag: a.Tag.SEQUENCE,
            value: [
              {
                name: 'PublicKeyAlgorithmIdentifier.algorithm',
                class: a.Class.UNIVERSAL,
                tag: a.Tag.OID,
                capture: 'publicKeyOID',
              },
            ],
          },
          {
            name: 'PublicKeyInfo.PublicKey',
            class: a.Class.UNIVERSAL,
            tag: a.Tag.BITSTRING,
            capture: 'publicKey',
          },
        ],
      }),
        (t.privateKeyValidator = {
          name: 'PrivateKeyInfo',
          class: a.Class.UNIVERSAL,
          tag: a.Tag.SEQUENCE,
          capture: 'privateKeyInfo',
          value: [
            {
              name: 'PrivateKeyInfo.Version',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyVersion',
            },
            {
              name: 'PrivateKeyInfo.AlgorithmIdentifier',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.SEQUENCE,
              value: [
                {
                  name: 'PrivateKeyAlgorithmIdentifier.algorithm',
                  class: a.Class.UNIVERSAL,
                  tag: a.Tag.OID,
                  capture: 'privateKeyOID',
                },
              ],
            },
            {
              name: 'PrivateKeyInfo.PrivateKey',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.OCTETSTRING,
              capture: 'privateKey',
            },
          ],
        })
      const u = {
          name: 'RSAPublicKey',
          class: a.Class.UNIVERSAL,
          tag: a.Tag.SEQUENCE,
          value: [
            {
              name: 'RSAPublicKey.modulus',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'publicKeyModulus',
            },
            {
              name: 'RSAPublicKey.exponent',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'publicKeyExponent',
            },
          ],
        },
        c = {
          name: 'RSAPrivateKey',
          class: a.Class.UNIVERSAL,
          tag: a.Tag.SEQUENCE,
          value: [
            {
              name: 'RSAPrivateKey.version',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyVersion',
            },
            {
              name: 'RSAPrivateKey.modulus',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyModulus',
            },
            {
              name: 'RSAPrivateKey.publicExponent',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyPublicExponent',
            },
            {
              name: 'RSAPrivateKey.privateExponent',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyPrivateExponent',
            },
            {
              name: 'RSAPrivateKey.prime1',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyPrime1',
            },
            {
              name: 'RSAPrivateKey.prime2',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyPrime2',
            },
            {
              name: 'RSAPrivateKey.exponent1',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyExponent1',
            },
            {
              name: 'RSAPrivateKey.exponent2',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyExponent2',
            },
            {
              name: 'RSAPrivateKey.coefficient',
              class: a.Class.UNIVERSAL,
              tag: a.Tag.INTEGER,
              capture: 'privateKeyCoefficient',
            },
          ],
        },
        l = [o.getOID('X25519'), o.getOID('X448'), o.getOID('Ed25519'), o.getOID('Ed448')]
      class f {
        constructor(e) {
          const r = {},
            n = e.validate(t.publicKeyValidator, r)
          if (null != n) throw new Error('Cannot read X.509 public key: ' + n.message)
          ;(this.oid = a.ASN1.parseOID(r.publicKeyOID.bytes)),
            (this.algo = o.getOIDName(this.oid)),
            (this._pkcs8 = e),
            (this._keyRaw = a.ASN1.parseBitString(r.publicKey.bytes).buf),
            (this._finalKey = this._keyRaw),
            (this._finalPEM = '')
        }
        static fromPEM(e) {
          const t = a.PEM.parse(e)[0]
          if (t.procType.includes('ENCRYPTED'))
            throw new Error('Could not convert public key from PEM, PEM is encrypted.')
          const r = a.ASN1.fromDER(t.body, !0)
          switch (t.type) {
            case 'PUBLIC KEY':
              return new f(r)
            case 'RSA PUBLIC KEY':
              const e = a.ASN1.Seq([
                a.ASN1.Seq([a.ASN1.OID(o.getOID('rsaEncryption')), a.ASN1.Null()]),
                a.ASN1.BitString(r.DER),
              ])
              return new f(e)
            default:
              throw new Error('Could not convert public key from PEM, recommend PKCS#8 PEM')
          }
        }
        static addVerifier(e, t) {
          if ('' === (e = o.getOID(e))) throw new Error('Invalid object identifier: ' + e)
          if (null != f._verifiers[e]) throw new Error(`Verifier ${e} exists`)
          f._verifiers[e] = t
        }
        get keyRaw() {
          return this._finalKey
        }
        verify(e, t, r) {
          const n = f._verifiers[this.oid]
          if (null != n) {
            const s = i.createHash(r).update(e).digest()
            return n.call(this, s, t)
          }
          const s = i.createVerify(r)
          return s.update(e), s.verify(this.toPEM(), t)
        }
        getFingerprint(e, t = 'PublicKey') {
          let r
          switch (t) {
            case 'PublicKeyInfo':
              r = this._pkcs8.DER
              break
            case 'PublicKey':
              r = this._keyRaw
              break
            default:
              throw new Error(`Unknown fingerprint type "${t}".`)
          }
          const n = i.createHash(e)
          return n.update(r), n.digest()
        }
        toASN1() {
          return this._pkcs8
        }
        toDER() {
          return this._pkcs8.DER
        }
        toPEM() {
          return (
            '' === this._finalPEM &&
              (this._finalPEM = new a.PEM('PUBLIC KEY', this._pkcs8.DER).toString()),
            this._finalPEM
          )
        }
        toJSON() {
          return { oid: this.oid, algo: this.algo, publicKey: this._keyRaw }
        }
        [n.inspect.custom](e, t) {
          return `<${this.constructor.name} ${n.inspect(this.toJSON(), t)}>`
        }
      }
      ;(f._verifiers = Object.create(null)), (t.PublicKey = f)
      class h {
        constructor(e) {
          const r = Object.create(null),
            n = e.validate(t.privateKeyValidator, r)
          if (null != n) throw new Error('Cannot read X.509 private key: ' + n.message)
          if (
            ((this.version = a.ASN1.parseIntegerNum(r.privateKeyVersion.bytes) + 1),
            (this.oid = a.ASN1.parseOID(r.privateKeyOID.bytes)),
            (this.algo = o.getOIDName(this.oid)),
            (this._pkcs8 = e),
            (this._keyRaw = r.privateKey.bytes),
            (this._publicKeyRaw = null),
            (this._finalKey = this._keyRaw),
            (this._finalPEM = ''),
            l.includes(this.oid))
          )
            if (
              ((this._finalKey = this._keyRaw =
                a.ASN1.parseDER(this._keyRaw, a.Class.UNIVERSAL, a.Tag.OCTETSTRING).bytes),
              '1.3.101.112' === this.oid)
            ) {
              const e = s.sign.keyPair.fromSeed(this._keyRaw)
              ;(this._publicKeyRaw = Buffer.from(e.publicKey)),
                (this._finalKey = Buffer.from(e.secretKey))
            } else if (2 === this.version)
              for (const t of e.mustCompound())
                t.class === a.Class.CONTEXT_SPECIFIC &&
                  1 === t.tag &&
                  ((this._publicKeyRaw = a.ASN1.parseBitString(t.bytes).buf),
                  (this._finalKey = Buffer.concat([this._keyRaw, this._publicKeyRaw])))
        }
        static fromPEM(e) {
          const t = a.PEM.parse(e)[0]
          if (t.procType.includes('ENCRYPTED'))
            throw new Error('Could not convert private key from PEM, PEM is encrypted.')
          let r = a.ASN1.fromDER(t.body, !0)
          switch (t.type) {
            case 'PRIVATE KEY':
              return new h(r)
            case 'RSA PRIVATE KEY':
              return (
                (r = a.ASN1.Seq([
                  r.value[0],
                  a.ASN1.Seq([a.ASN1.OID(o.getOID('rsaEncryption')), a.ASN1.Null()]),
                  new a.ASN1(a.Class.UNIVERSAL, a.Tag.OCTETSTRING, r.DER),
                ])),
                new h(r)
              )
            default:
              throw new Error('Could not convert private key from PEM, recommend PKCS#8 PEM')
          }
        }
        static addSigner(e, t) {
          if ('' === (e = o.getOID(e))) throw new Error('Invalid object identifier: ' + e)
          if (null != h._signers[e]) throw new Error(`Signer ${e} exists`)
          h._signers[e] = t
        }
        get keyRaw() {
          return this._finalKey
        }
        get publicKeyRaw() {
          return this._publicKeyRaw
        }
        sign(e, t) {
          const r = h._signers[this.oid]
          if (null != r) {
            const n = i.createHash(t).update(e).digest()
            return r.call(this, n)
          }
          const n = i.createSign(t)
          return n.update(e), n.sign(this.toPEM())
        }
        toASN1() {
          return this._pkcs8
        }
        toDER() {
          return this._pkcs8.DER
        }
        toPEM() {
          return (
            '' === this._finalPEM &&
              (this._finalPEM = new a.PEM('PRIVATE KEY', this._pkcs8.DER).toString()),
            this._finalPEM
          )
        }
        toJSON() {
          return {
            version: this.version,
            oid: this.oid,
            algo: this.algo,
            privateKey: this._keyRaw,
            publicKey: this._publicKeyRaw,
          }
        }
        [n.inspect.custom](e, t) {
          return `<${this.constructor.name} ${n.inspect(this.toJSON(), t)}>`
        }
      }
      ;(h._signers = Object.create(null)), (t.PrivateKey = h)
      class p extends f {
        static fromPublicKey(e) {
          return new p(e.toASN1())
        }
        constructor(e) {
          if ((super(e), o.getOID(this.oid) !== o.getOID('rsaEncryption')))
            throw new Error('Invalid RSA public key, unknown OID: ' + this.oid)
          const t = Object.create(null)
          this._pkcs1 = a.ASN1.fromDER(this._keyRaw, !0)
          const r = this._pkcs1.validate(u, t)
          if (null != r) throw new Error('Cannot read RSA public key: ' + r.message)
          ;(this.modulus = a.ASN1.parseIntegerStr(t.publicKeyModulus.bytes)),
            (this.exponent = a.ASN1.parseIntegerNum(t.publicKeyExponent.bytes))
        }
        toASN1() {
          return this._pkcs1
        }
        toDER() {
          return this._keyRaw
        }
        toPEM() {
          return (
            '' === this._finalPEM &&
              (this._finalPEM = new a.PEM('RSA PUBLIC KEY', this._keyRaw).toString()),
            this._finalPEM
          )
        }
        toPublicKeyPEM() {
          return new a.PEM('PUBLIC KEY', this._pkcs8.DER).toString()
        }
        toJSON() {
          return {
            oid: this.oid,
            algo: this.algo,
            modulus: y(this.modulus),
            exponent: this.exponent,
          }
        }
        [n.inspect.custom](e, t) {
          return `<${this.constructor.name} ${n.inspect(this.toJSON(), t)}>`
        }
      }
      t.RSAPublicKey = p
      class d extends h {
        static fromPrivateKey(e) {
          return new d(e.toASN1())
        }
        constructor(e) {
          if ((super(e), o.getOID(this.oid) !== o.getOID('rsaEncryption')))
            throw new Error('Invalid RSA private key, unknown OID: ' + this.oid)
          const t = Object.create(null)
          this._pkcs1 = a.ASN1.fromDER(this._keyRaw, !0)
          const r = this._pkcs1.validate(c, t)
          if (null != r) throw new Error('Cannot read RSA private key: ' + r.message)
          ;(this.publicExponent = a.ASN1.parseIntegerNum(t.privateKeyPublicExponent.bytes)),
            (this.privateExponent = a.ASN1.parseIntegerStr(t.privateKeyPrivateExponent.bytes)),
            (this.modulus = a.ASN1.parseIntegerStr(t.privateKeyModulus.bytes)),
            (this.prime1 = a.ASN1.parseIntegerStr(t.privateKeyPrime1.bytes)),
            (this.prime2 = a.ASN1.parseIntegerStr(t.privateKeyPrime2.bytes)),
            (this.exponent1 = a.ASN1.parseIntegerStr(t.privateKeyExponent1.bytes)),
            (this.exponent2 = a.ASN1.parseIntegerStr(t.privateKeyExponent2.bytes)),
            (this.coefficient = a.ASN1.parseIntegerStr(t.privateKeyCoefficient.bytes))
        }
        toASN1() {
          return this._pkcs1
        }
        toDER() {
          return this._keyRaw
        }
        toPEM() {
          return (
            '' === this._finalPEM &&
              (this._finalPEM = new a.PEM('RSA PRIVATE KEY', this._keyRaw).toString()),
            this._finalPEM
          )
        }
        toPrivateKeyPEM() {
          return new a.PEM('PRIVATE KEY', this._pkcs8.DER).toString()
        }
        toJSON() {
          return {
            version: this.version,
            oid: this.oid,
            algo: this.algo,
            publicExponent: this.publicExponent,
            privateExponent: y(this.privateExponent),
            modulus: y(this.modulus),
            prime1: y(this.prime1),
            prime2: y(this.prime2),
            exponent1: y(this.exponent1),
            exponent2: y(this.exponent2),
            coefficient: y(this.coefficient),
          }
        }
        [n.inspect.custom](e, t) {
          return `<${this.constructor.name} ${n.inspect(this.toJSON(), t)}>`
        }
      }
      function y(e) {
        return e.length % 8 != 0 && e.startsWith('00') ? e.slice(2) : e
      }
      ;(t.RSAPrivateKey = d),
        f.addVerifier(o.getOID('Ed25519'), function (e, t) {
          return s.sign.detached.verify(e, t, this.keyRaw)
        }),
        h.addSigner(o.getOID('Ed25519'), function (e) {
          const t = this.keyRaw
          if (64 !== t.length) throw new Error('Invalid signing key.')
          return Buffer.from(s.sign.detached(e, t))
        })
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(11)
      t.BufferVisitor = n.BufferVisitor
      var i = r(41)
      t.PEM = i.PEM
      var s = r(42)
      ;(t.ASN1 = s.ASN1), (t.Class = s.Class), (t.Tag = s.Tag), (t.BitString = s.BitString)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      t.BufferVisitor = class {
        constructor(e, t = 0, r = 0) {
          ;(this.start = t), (this.end = r > t ? r : t), (this.buf = e)
        }
        get length() {
          return this.buf.length
        }
        reset(e = 0, t = 0) {
          return (
            (this.start = e),
            t >= this.start ? (this.end = t) : this.end < this.start && (this.end = this.start),
            this
          )
        }
        walk(e) {
          return (this.start = this.end), (this.end += e), this
        }
        mustHas(e, t = 'Too few bytes to parse.') {
          const r = this.end + e
          if (r > this.buf.length) {
            const e = new Error(t)
            throw ((e.available = this.buf.length), (e.requested = r), e)
          }
          return this.walk(0), this
        }
        mustWalk(e, t) {
          return this.mustHas(e, t), this.walk(e), this
        }
      }
    },
    function (e, t, r) {
      'use strict'
      var n = o(r(13)),
        i = o(r(19)),
        s = o(r(46)),
        a = r(1)
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = {
        initWeixin: (e = {}) => (
          (e.clientType = e.clientType || __ctx__.PLATFORM), (0, a.createApi)(n.default, e)
        ),
        initAlipay: (e = {}) => (
          (e.clientType = e.clientType || __ctx__.PLATFORM), (0, a.createApi)(i.default, e)
        ),
        initAppleIapPayment: (e = {}) => (
          (e.clientType = e.clientType || __ctx__.PLATFORM), (0, a.createApi)(s.default, e)
        ),
      }
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = a(r(14)),
        i = a(r(18)),
        s = r(1)
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      ;(t.default = class {
        constructor(e = {}) {
          if (!e.appId) throw new Error('appId required')
          if (!e.mchId) throw new Error('mchId required')
          if (!e.key) throw new Error('key required')
          ;(e.signType = e.signType || 'MD5'),
            (this.options = Object.assign({}, e)),
            (this._protocols = i.default),
            (this.baseUrl = 'https://api.mch.weixin.qq.com'),
            (this.paths = {
              unifiedOrder: '/pay/unifiedorder',
              orderQuery: '/pay/orderquery',
              closeOrder: '/pay/closeorder',
              refund: '/secapi/pay/refund',
              refundQuery: '/pay/refundquery',
              downloadBill: '/pay/downloadbill',
              downloadFundflow: '/pay/downloadfundflow',
              getsignkey: '/pay/getsignkey',
            })
        }
        _getSign(e, t) {
          const r = n.default.getSignStr(e) + '&key=' + this.options.key
          switch (t) {
            case 'MD5':
              return n.default.md5(r).toUpperCase()
            case 'HMAC-SHA256':
              return n.default.sha256(r, this.options.key).toUpperCase()
            default:
              throw new Error('signType Error')
          }
        }
        _normalizeResult(e, t) {
          return (
            (e.returnMsg = e.returnMsg || ('SUCCESS' === e.returnCode ? 'ok' : 'fail')),
            (e.errMsg = `payment.${t} ${e.returnMsg.toLowerCase()}`),
            e
          )
        }
        _parse(e, t, r) {
          const i = n.default.parseXML(e)
          if ('FAIL' === i.return_code) throw new Error('' + i.return_msg)
          if ('getSandboxKey' !== t) {
            if (i.appid !== this.options.appId) throw new Error('appId不匹配')
            if (i.mch_id !== this.options.mchId) throw new Error('mchId不匹配')
            if (i.sign !== this._getSign(i, r)) throw new Error('返回结果签名错误')
            ;(i.app_id = i.appid), delete i.appid
          }
          if ('FAIL' === i.result_code) throw new Error(`${i.err_code} ${i.err_code_des}`)
          return this._normalizeResult((0, s.snake2camelJson)(i), t)
        }
        _parseBill(e, t) {
          const r = {}
          if (n.default.isXML(e)) {
            const t = n.default.parseXML(e)
            if ('FAIL' === t.return_code) throw new Error('' + t.return_msg)
            if ('FAIL' === t.result_code) throw new Error(`${t.err_code} ${t.err_code_des}`)
          } else (r.returnCode = 'SUCCESS'), (r.content = e)
          return this._normalizeResult(r, t)
        }
        _getPublicParams() {
          const { appId: e, mchId: t, subAppId: r, subMchId: i } = this.options
          return r
            ? { appid: e, mchId: t, nonceStr: n.default.getNonceStr(), subAppid: r, subMchId: i }
            : { appid: e, mchId: t, nonceStr: n.default.getNonceStr() }
        }
        async _requestWxpay(e, t, r = !1) {
          if (r && !this.options.pfx) throw new Error('此接口需要微信支付证书（请传入pfx字段）')
          'getSandboxKey' !== t && (await this._initSandbox())
          const i = e.signType || this.options.signType
          ;(e = (0, s.camel2snakeJson)(e)).sign = this._getSign(e, i)
          const a = {
            method: 'POST',
            dataType: 'text',
            data: n.default.buildXML(e),
            timeout: this.options.timeout,
          }
          r && ((a.pfx = this.options.pfx), (a.passphrase = this.options.mchId))
          const { status: o, data: u } = await uniCloud.httpclient.request(
            this.options.sandbox
              ? `${this.baseUrl}/sandboxnew${this.paths[t]}`
              : `${this.baseUrl}${this.paths[t]}`,
            a
          )
          if (200 !== o) throw new Error('request fail')
          return -1 !== ['downloadBill', 'downloadFundflow'].indexOf(t)
            ? this._parseBill(u, t)
            : this._parse(u, t, i)
        }
        async getSandboxKey() {
          const e = { mchId: this.options.mchId, nonceStr: n.default.getNonceStr() }
          return await this._requestWxpay(e, 'getSandboxKey')
        }
        async _initSandbox() {
          this.options.sandbox &&
            !this.options.sandboxKey &&
            (this.options.key = this.options.sandboxKey =
              await this.getSandboxKey().sandbox_signkey)
        }
        async unifiedOrder(e) {
          let t
          if (e.tradeType) t = e.tradeType
          else
            switch (this.options.clientType) {
              case 'app-plus':
                t = 'APP'
                break
              case 'mp-weixin':
              default:
                t = 'JSAPI'
            }
          const r = this._getPublicParams()
          r.subAppid && (e.sub_openid = e.openid), ('JSAPI' !== t || r.subAppid) && delete e.openid
          const n = { ...e, ...r, spbillCreateIp: e.spbillCreateIp || '127.0.0.1', tradeType: t }
          return await this._requestWxpay(n, 'unifiedOrder')
        }
        _getPayParamsByPrepayId(e, t) {
          let r
          switch (this.options.clientType) {
            case 'app-plus':
              ;(r = {
                appid: this.options.subAppId ? this.options.subAppId : this.options.appId,
                noncestr: n.default.getNonceStr(),
                package: 'Sign=WXPay',
                partnerid: this.options.mchId,
                prepayid: e,
                timestamp: '' + ((Date.now() / 1e3) | 0),
              }),
                (r.sign = this._getSign(r, t))
              break
            case 'mp-weixin':
            default: {
              const i = '' + ((Date.now() / 1e3) | 0)
              ;(r = {
                appId: this.options.subAppId ? this.options.subAppId : this.options.appId,
                nonceStr: n.default.getNonceStr(),
                package: 'prepay_id=' + e,
                timeStamp: i,
              }),
                (r.signType = t),
                (r.paySign = this._getSign(r, t)),
                (r.timestamp = i)
              break
            }
          }
          return r
        }
        async getOrderInfo(e) {
          let t
          if (e.tradeType) t = e.tradeType
          else
            switch (this.options.clientType) {
              case 'app-plus':
                t = 'APP'
                break
              case 'mp-weixin':
              default:
                t = 'JSAPI'
            }
          'JSAPI' !== t && delete e.openid, (e.tradeType = t)
          const r = await this.unifiedOrder(e)
          if ('NATIVE' === t || 'MWEB' === t) return r
          if (!r.prepayId) throw new Error(r.errMsg || '获取prepayId失败')
          return this._getPayParamsByPrepayId(r.prepayId, e.signType || this.options.signType)
        }
        async orderQuery(e) {
          const t = { ...e, ...this._getPublicParams() }
          return await this._requestWxpay(t, 'orderQuery')
        }
        async closeOrder(e) {
          const t = { ...e, ...this._getPublicParams() }
          return await this._requestWxpay(t, 'closeOrder')
        }
        async refund(e) {
          const t = { ...e, ...this._getPublicParams() }
          return await this._requestWxpay(t, 'refund', !0)
        }
        async refundQuery(e) {
          const t = { ...e, ...this._getPublicParams() }
          return await this._requestWxpay(t, 'refundQuery')
        }
        async downloadBill(e) {
          const t = { ...e, ...this._getPublicParams(), billType: e.billType || 'ALL' }
          return await this._requestWxpay(t, 'downloadBill')
        }
        async downloadFundflow(e) {
          const t = {
            ...e,
            ...this._getPublicParams(),
            signType: e.signType || 'HMAC-SHA256',
            accountType: e.accountType || 'Basic',
          }
          return await this._requestWxpay(t, 'downloadFundflow', !0)
        }
        _getNotifyData(e) {
          let t = e.body
          return (
            e.isBase64Encoded && (t = Buffer.from(t, 'base64').toString('utf-8')),
            n.default.parseXML(t)
          )
        }
        _verifyNotify(e, t) {
          const r = this._getNotifyData(e)
          if ('FAIL' === r.return_code) throw new Error(`${r.return_code} ${r.return_msg}`)
          if (r.appid !== this.options.appId) throw new Error('appId不匹配')
          if (r.mch_id !== this.options.mchId) throw new Error('mchId不匹配')
          if (t && r.sign !== this._getSign(r, this.options.signType))
            throw new Error('通知验签未通过')
          const n = (0, s.snake2camelJson)(r)
          return (n.appId = n.appid), delete n.appid, n
        }
        verifyPaymentNotify(e) {
          return 'payment' === this.checkNotifyType(e) && this._verifyNotify(e, !0)
        }
        verifyRefundNotify(e) {
          if ('refund' !== this.checkNotifyType(e)) return !1
          const t = this._verifyNotify(e, !1),
            r = (0, s.snake2camelJson)(
              n.default.parseXML(n.default.decryptData(t.reqInfo, n.default.md5(this.options.key)))
            )
          return Object.assign(t, r), delete t.reqInfo, t
        }
        checkNotifyType(e) {
          const t = this._getNotifyData(e)
          return 'total_fee' in t ? 'payment' : 'req_info' in t ? 'refund' : 'payment'
        }
      }),
        (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n,
        i = (n = r(0)) && n.__esModule ? n : { default: n },
        s = r(1)
      var a = {
        decryptData: function (e, t, r = '') {
          const n = i.default.createDecipheriv('aes-256-ecb', t, r)
          n.setAutoPadding(!0)
          let s = n.update(e, 'base64', 'utf8')
          return (s += n.final('utf8')), s
        },
        md5: function (e, t = 'utf8') {
          return i.default.createHash('md5').update(e, t).digest('hex')
        },
        sha256: function (e, t, r = 'utf8') {
          return i.default.createHmac('sha256', t).update(e, r).digest('hex')
        },
        getSignStr: function (e) {
          return Object.keys(e)
            .filter((t) => 'sign' !== t && void 0 !== e[t] && '' !== e[t])
            .sort()
            .map((t) => t + '=' + ((0, s.isPlainObject)(e[t]) ? JSON.stringify(e[t]) : e[t]))
            .join('&')
        },
        getNonceStr: function (e = 16) {
          let t = ''
          for (; t.length < e; ) t += Math.random().toString(32).substring(2)
          return t.substring(0, e)
        },
        buildXML: function (e, t = 'xml') {
          return `<${t}>${Object.keys(e)
            .map((t) =>
              (0, s.isPlainObject)(e[t])
                ? `<${t}><![CDATA[${JSON.stringify(e[t])}]]></${t}>`
                : `<${t}><![CDATA[${e[t]}]]></${t}>`
            )
            .join('')}</${t}>`
        },
        parseXML: function (e) {
          const t = /<(?:xml|root).*?>([\s|\S]*)<\/(?:xml|root)>/.exec(e)[1],
            r = {},
            n = /<(.*?)>(?:<!\[CDATA\[){0,1}(.*?)(?:\]\]>){0,1}<\/.*?>/g
          let i = null
          for (; (i = n.exec(t)); ) r[i[1]] = i[2]
          return r
        },
        isXML: function (e) {
          return /^(<\?xml.*\?>)?(\r?\n)*<xml>(.|\r?\n)*<\/xml>$/i.test(e.trim())
        },
      }
      ;(t.default = a), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      ;(t.default = class {
        constructor() {
          ;(this._boundary =
            '------FormDataBaseBoundary' + Math.random().toString(36).substring(2)),
            (this.dataList = [])
        }
        _addData(e) {
          const t = this.dataList[this.dataList.length - 1]
          'string' == typeof e && 'string' == typeof t
            ? (this.dataList[this.dataList.length - 1] = t + '\r\n' + e)
            : this.dataList.push(e)
        }
        append(e, t, r) {
          this._addData('--' + this._boundary)
          let n = `Content-Disposition: form-data; name="${e}"`
          switch (Buffer.isBuffer(t)) {
            case !0:
              if (!r.filename || !r.contentType)
                throw new Error('filename and contentType required')
              ;(n += `; filename="${r.filename}"`),
                this._addData(n),
                this._addData('Content-Type: ' + r.contentType),
                this._addData(''),
                this._addData(t)
              break
            default:
              this._addData(''), this._addData(t)
          }
        }
        getHeaders(e) {
          const t = { 'Content-Type': 'multipart/form-data; boundary=' + this._boundary }
          return Object.assign(t, e)
        }
        getBuffer() {
          let e = Buffer.alloc(0)
          return (
            this.dataList.forEach((t) => {
              ;(e = Buffer.isBuffer(t)
                ? Buffer.concat([e, t])
                : Buffer.concat([e, Buffer.from('' + t)])),
                (e = Buffer.concat([e, Buffer.from('\r\n')]))
            }),
            (e = Buffer.concat([e, Buffer.from('--' + this._boundary + '--')])),
            e
          )
        }
      }),
        (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      class n extends Error {
        constructor(e) {
          super(e.message),
            (this.errMsg = e.message || ''),
            Object.defineProperties(this, {
              message: {
                get() {
                  return `errCode: ${e.code || ''} | errMsg: ` + this.errMsg
                },
                set(e) {
                  this.errMsg = e
                },
              },
            })
        }
      }
      ;(t.default = n), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.createApi = function (e, t) {
          const r = new e(t)
          return new Proxy(r, {
            get: function (e, t) {
              if (
                'function' == typeof e[t] &&
                0 !== t.indexOf('_') &&
                e._protocols &&
                e._protocols[t]
              ) {
                const r = e._protocols[t]
                return async function (n) {
                  n = i(n, r.args)
                  let s = await e[t](n)
                  return (s = i(s, r.returnValue)), s
                }
              }
              return e[t]
            },
          })
        })
      var n = r(2)
      function i(e = {}, t) {
        if (!t || !e) return e
        const r = ['_pre', '_purify', '_post']
        t._pre && (e = t._pre(e))
        let i = { shouldDelete: new Set([]) }
        if (t._purify) {
          const e = t._purify
          for (const t in e) e[t] = new Set(e[t])
          i = Object.assign(i, e)
        }
        if ((0, n.isPlainObject)(t))
          for (const s in t) {
            const a = t[s]
            ;(0, n.isFn)(a) && -1 === r.indexOf(s)
              ? (e[s] = a(e))
              : 'string' == typeof a &&
                -1 === r.indexOf(s) &&
                ((e[s] = e[a]), i.shouldDelete.add(a))
          }
        else (0, n.isFn)(t) && (e = t(e))
        if (i.shouldDelete) for (const t of i.shouldDelete) delete e[t]
        return t._post && (e = t._post(e)), e
      }
    },
    function (e, t, r) {
      'use strict'
      function n(e, t) {
        t.forEach((t) => {
          void 0 !== e[t] && (e[t] = Number(e[t]))
        })
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var i = {
        unifiedOrder: { args: { _purify: { shouldDelete: ['subject'] } } },
        getOrderInfo: { args: { _purify: { shouldDelete: ['subject'] } } },
        orderQuery: {
          returnValue: function (e) {
            n(e, ['cashFee', 'totalFee', 'couponCount']), (e.couponList = [])
            const t = e.couponCount || 0
            for (let r = 0; r < t; r++)
              e.couponList.push({
                couponId: e['couponId' + r],
                couponType: e['couponType' + r],
                couponFee: Number(e['couponFee' + r]),
              }),
                delete e['couponId' + r],
                delete e['couponType' + r],
                delete e['couponFee' + r]
            return e
          },
        },
        refund: {
          returnValue: function (e) {
            n(e, [
              'refundFee',
              'settlementRefundFee',
              'totalFee',
              'settlementTotalFee',
              'cashFee',
              'cashRefundFee',
              'couponRefundFee',
              'couponRefundCount',
            ]),
              (e.couponList = [])
            const t = e.couponRefundCount || 0
            for (let r = 0; r < t; r++)
              e.couponList.push({
                couponRefundId: e['couponRefundId' + r],
                couponType: e['couponType' + r],
                couponRefundFee: Number(e['couponRefundFee' + r]),
              }),
                delete e['couponRefundId' + r],
                delete e['couponType' + r],
                delete e['couponRefundFee' + r]
            return e
          },
        },
        refundQuery: {
          returnValue: function (e) {
            n(e, ['totalFee', 'refundFee', 'settlementTotalFee', 'cashFee', 'refundCount']),
              (e.refundList = [])
            for (let t = 0; t < e.refundCount; t++) {
              ;(e['refundFee' + t] = Number(e['refundFee' + t])),
                (e['couponRefundFee' + t] = Number(e['couponRefundFee' + t])),
                (e['settlementRefundFee' + t] = Number(e['settlementRefundFee' + t]))
              const r = Number(e['couponRefundCount' + t]) || 0,
                n = {
                  outRefundNo: e['outRefundNo' + t],
                  refundId: e['refundId' + t],
                  refundChannel: e['refundChannel' + t],
                  refundFee: Number(e['refundFee' + t]),
                  settlementRefundFee: Number(e['settlementRefundFee' + t]),
                  couponRefundFee: Number(e['couponRefundFee' + t]),
                  couponRefundCount: r,
                  refundStatus: e['refundStatus' + t],
                  refundAccount: e['refundAccount' + t],
                  refundRecvAccout: e['refundRecvAccout' + t],
                  refundSuccessTime: e['refundSuccessTime' + t],
                  couponList: [],
                }
              delete e['outRefundNo' + t],
                delete e['refundId' + t],
                delete e['refundChannel' + t],
                delete e['refundFee' + t],
                delete e['settlementRefundFee' + t],
                delete e['couponRefundFee' + t],
                delete e['couponRefundCount' + t],
                delete e['refundStatus' + t],
                delete e['refundAccount' + t],
                delete e['refundRecvAccout' + t],
                delete e['refundSuccessTime' + t]
              for (let i = 0; i < r; i++)
                n.couponList.push({
                  couponRefundId: e[`couponRefundId${t}${i}`],
                  couponType: e[`couponType${t}${i}`],
                  couponRefundFee: Number(e[`couponRefundId${t}${i}`]),
                }),
                  delete e[`couponRefundId${t}${i}`],
                  delete e[`couponType${t}${i}`],
                  delete e[`couponRefundFee${t}${i}`]
              e.refundList.push(n)
            }
            return e
          },
        },
        verifyPaymentNotify: {
          returnValue: function (e) {
            n(e, ['cashFee', 'totalFee', 'couponCount'])
            const t = e.couponCount || 0
            e.couponList = []
            for (let r = 0; r < t; r++)
              e.couponList.push({
                couponId: e['couponId' + r],
                couponType: e['couponType' + r],
                couponFee: Number(e['couponFee' + r]),
              }),
                delete e['couponId' + r],
                delete e['couponType' + r],
                delete e['couponFee' + r]
            return e
          },
        },
        verifyRefundNotify: {
          returnValue: function (e) {
            return n(e, ['refundFee', 'settlementRefundFee', 'settlementTotalFee', 'totalFee']), e
          },
        },
      }
      ;(t.default = i), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = r(1),
        i = c(r(0)),
        s = c(r(20)),
        a = c(r(21)),
        o = c(r(45)),
        u = r(8)
      function c(e) {
        return e && e.__esModule ? e : { default: e }
      }
      const l = { RSA: 'RSA-SHA1', RSA2: 'RSA-SHA256' }
      class f extends a.default {
        constructor(e) {
          e.sandbox && (e.gateway = 'https://openapi.alipaydev.com/gateway.do'),
            super(
              (e = Object.assign(
                {
                  gateway: 'https://openapi.alipay.com/gateway.do',
                  timeout: 5e3,
                  charset: 'utf-8',
                  version: '1.0',
                  signType: 'RSA2',
                  timeOffset: 8,
                  keyType: 'PKCS8',
                },
                e
              ))
            ),
            (this.options = e),
            (this._protocols = o.default)
        }
        async _request(e, t) {
          const r = {}
          t.notifyUrl && ((r.notifyUrl = t.notifyUrl), delete t.notifyUrl), (r.bizContent = t)
          return await this.exec(e, r, { validateSign: !0 })
        }
        async unifiedOrder(e) {
          return await this._request(
            'alipay.trade.create',
            Object.assign({ sellerId: this.options.mchId }, e)
          )
        }
        _getSign(e, t) {
          return (0, u.sign)(e, t, this.config)
        }
        formatUrl(e, t) {
          let r = e
          const n = [
            'app_id',
            'method',
            'format',
            'charset',
            'sign_type',
            'sign',
            'timestamp',
            'version',
            'notify_url',
            'return_url',
            'auth_token',
            'app_auth_token',
            'app_cert_sn',
            'alipay_root_cert_sn',
            'appCertSn',
            'alipayRootCertSn',
          ]
          for (const e in t)
            if (n.indexOf(e) > -1) {
              const n = encodeURIComponent(t[e])
              ;(r = `${r}${r.includes('?') ? '&' : '?'}${e}=${n}`), delete t[e]
            }
          return { execParams: t, url: r }
        }
        async getOrderInfo(e) {
          let t
          if (e.tradeType) (t = e.tradeType), delete e.tradeType
          else
            switch (this.options.clientType) {
              case 'app-plus':
                t = 'APP'
                break
              case 'mp-alipay':
              default:
                t = 'JSAPI'
            }
          switch (t) {
            case 'APP': {
              delete e.buyerId
              const t = {}
              e.notifyUrl && ((t.notifyUrl = e.notifyUrl), delete e.notifyUrl), (t.bizContent = e)
              const r = this._getSign('alipay.trade.app.pay', t),
                { url: n, execParams: i } = this.formatUrl('', r)
              return (n + '&biz_content=' + encodeURIComponent(i.biz_content)).substr(1)
            }
            case 'JSAPI': {
              const t = await this.unifiedOrder(e)
              if (!t.tradeNo)
                throw new Error('获取支付宝交易号失败，详细信息为：' + JSON.stringify(t))
              return t.tradeNo
            }
            case 'NATIVE':
              return await this._request(
                'alipay.trade.precreate',
                Object.assign({ sellerId: this.options.mchId }, e)
              )
            default:
              throw new Error(
                '不支持的支付类型，支付宝支付下单仅支持App、支付宝小程序、网站二维码支付'
              )
          }
        }
        async orderQuery(e) {
          return await this._request('alipay.trade.query', e)
        }
        async cancelOrder(e) {
          return await this._request('alipay.trade.cancel', e)
        }
        async closeOrder(e) {
          return await this._request('alipay.trade.close', e)
        }
        async refund(e) {
          return await this._request('alipay.trade.refund', e)
        }
        async refundQuery(e) {
          return await this._request('alipay.trade.fastpay.refund.query', e)
        }
        notifyRSACheck(e, t, r) {
          const n = Object.keys(e)
            .sort()
            .filter((e) => e)
            .map((t) => {
              let r = e[t]
              return (
                '[object String]' !== Array.prototype.toString.call(r) && (r = JSON.stringify(r)),
                `${t}=${r}`
              )
            })
            .join('&')
          return i.default
            .createVerify(l[r])
            .update(n, 'utf8')
            .verify(this.config.alipayPublicKey, t, 'base64')
        }
        _getNotifyData(e) {
          if (!e.headers) throw new Error('通知格式不正确')
          let t
          for (const r in e.headers) 'content-type' === r.toLowerCase() && (t = e.headers[r])
          if (!1 !== e.isBase64Encoded && -1 === t.indexOf('application/x-www-form-urlencoded'))
            throw new Error('通知格式不正确')
          return s.default.parse(e.body)
        }
        _verifyNotify(e) {
          const t = this._getNotifyData(e)
          return !!this.checkNotifySign(t) && (0, n.snake2camelJson)(t)
        }
        verifyPaymentNotify(e) {
          return 'payment' === this.checkNotifyType(e) && this._verifyNotify(e)
        }
        verifyRefundNotify(e) {
          return 'refund' === this.checkNotifyType(e) && this._verifyNotify(e)
        }
        checkNotifyType(e) {
          return 'refund_fee' in this._getNotifyData(e) ? 'refund' : 'payment'
        }
      }
      ;(t.default = f), (e.exports = t.default)
    },
    function (e, t) {
      e.exports = require('querystring')
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(5),
        i = r(22),
        s = r(0),
        a = r(23),
        o = r(24),
        u = r(25),
        c = r(27),
        l = r(28),
        f = r(7),
        h = r(8),
        p = r(36),
        d = r(44)
      t.default = class {
        constructor(e) {
          if (!e.appId) throw Error('config.appId is required')
          if (!e.privateKey) throw Error('config.privateKey is required')
          const t = 'PKCS8' === e.keyType ? 'PRIVATE KEY' : 'RSA PRIVATE KEY'
          ;(e.privateKey = this.formatKey(e.privateKey, t)),
            e.appCertPath || e.appCertContent
              ? ((e.appCertSn = i.empty(e.appCertContent)
                  ? p.getSNFromPath(e.appCertPath, !1)
                  : p.getSN(e.appCertContent, !1)),
                (e.alipayCertSn = i.empty(e.alipayPublicCertContent)
                  ? p.getSNFromPath(e.alipayPublicCertPath, !1)
                  : p.getSN(e.alipayPublicCertContent, !1)),
                (e.alipayRootCertSn = i.empty(e.alipayRootCertContent)
                  ? p.getSNFromPath(e.alipayRootCertPath, !0)
                  : p.getSN(e.alipayRootCertContent, !0)),
                (e.alipayPublicKey = i.empty(e.alipayPublicCertContent)
                  ? p.loadPublicKeyFromPath(e.alipayPublicCertPath)
                  : p.loadPublicKey(e.alipayPublicCertContent)),
                (e.alipayPublicKey = this.formatKey(e.alipayPublicKey, 'PUBLIC KEY')))
              : e.alipayPublicKey &&
                (e.alipayPublicKey = this.formatKey(e.alipayPublicKey, 'PUBLIC KEY')),
            (this.config = Object.assign(
              {
                urllib: a,
                gateway: 'https://openapi.alipay.com/gateway.do',
                timeout: 5e3,
                camelcase: !0,
                signType: 'RSA2',
                charset: 'utf-8',
                version: '1.0',
              },
              l(e, { deep: !0 })
            )),
            (this.sdkVersion = 'alipay-sdk-nodejs-' + d.version)
        }
        formatKey(e, t) {
          const r = e.split('\n').map((e) => e.trim())
          return (
            r[0].includes(t) && r.shift(),
            r[r.length - 1].includes(t) && r.pop(),
            `-----BEGIN ${t}-----\n${r.join('')}\n-----END ${t}-----`
          )
        }
        formatUrl(e, t) {
          let r = e
          const n = [
            'app_id',
            'method',
            'format',
            'charset',
            'sign_type',
            'sign',
            'timestamp',
            'version',
            'notify_url',
            'return_url',
            'auth_token',
            'app_auth_token',
            'appCertSn',
            'alipayRootCertSn',
          ]
          for (const e in t)
            if (n.indexOf(e) > -1) {
              const n = encodeURIComponent(t[e])
              ;(r = `${r}${r.includes('?') ? '&' : '?'}${e}=${n}`), delete t[e]
            }
          return { execParams: t, url: r }
        }
        multipartExec(e, t = {}) {
          const r = this.config
          let s = {},
            a = {}
          const p = t.log && i.fn(t.log.info) ? t.log.info : null,
            d = t.log && i.fn(t.log.error) ? t.log.error : null
          t.formData.getFields().forEach((e) => {
            ;(s[e.name] = e.value), (a[e.name] = e.value)
          }),
            (s = l(s, { deep: !0 })),
            (a = f(a)),
            t.formData.getFiles().forEach((e) => {
              const t = c(e.fieldName)
              a[t] = u.isValid(e.path) ? o(e.path) : n.createReadStream(e.path)
            })
          const y = h.sign(e, s, r),
            { url: g } = this.formatUrl(r.gateway, y)
          return (
            p &&
              p('[AlipaySdk]start exec url: %s, method: %s, params: %s', g, e, JSON.stringify(s)),
            new Promise((n, i) => {
              o.post(
                {
                  url: g,
                  formData: a,
                  json: !1,
                  timeout: r.timeout,
                  headers: { 'user-agent': this.sdkVersion },
                },
                (s, {}, a) => {
                  s && ((s.message = '[AlipaySdk]exec error'), d && d(s), i(s)),
                    p && p('[AlipaySdk]exec response: %s', a)
                  const o = JSON.parse(a),
                    u = e.replace(/\./g, '_') + '_response',
                    c = o[u]
                  if (c) {
                    !t.validateSign || this.checkResponseSign(a, u)
                      ? n(r.camelcase ? l(c, { deep: !0 }) : c)
                      : i({ serverResult: a, errorMessage: '[AlipaySdk]验签失败' })
                  }
                  i({ serverResult: a, errorMessage: '[AlipaySdk]HTTP 请求错误' })
                }
              )
            })
          )
        }
        pageExec(e, t = {}) {
          let r = { alipaySdk: this.sdkVersion }
          const n = this.config,
            s = t.log && i.fn(t.log.info) ? t.log.info : null
          t.formData.getFields().forEach((e) => {
            r[e.name] = e.value
          }),
            (r = l(r, { deep: !0 }))
          const a = h.sign(e, r, n),
            { url: o, execParams: u } = this.formatUrl(n.gateway, a)
          return (
            s &&
              s('[AlipaySdk]start exec url: %s, method: %s, params: %s', o, e, JSON.stringify(r)),
            'get' === t.formData.getMethod()
              ? new Promise((e) => {
                  const t = Object.keys(u).map((e) => `${e}=${encodeURIComponent(u[e])}`)
                  e(`${o}&${t.join('&')}`)
                })
              : new Promise((e) => {
                  const t = 'alipaySDKSubmit' + Date.now()
                  e(
                    `\n        <form action="${o}" method="post" name="${t}" id="${t}">\n          ${Object.keys(
                      u
                    )
                      .map(
                        (e) =>
                          `<input type="hidden" name="${e}" value="${String(u[e]).replace(
                            /\"/g,
                            '&quot;'
                          )}" />`
                      )
                      .join(
                        ''
                      )}\n        </form>\n        <script>document.forms["${t}"].submit();<\/script>\n      `
                  )
                })
          )
        }
        notifyRSACheck(e, t, r) {
          const n = Object.keys(e)
            .sort()
            .filter((e) => e)
            .map((t) => {
              let r = e[t]
              return (
                '[object String]' !== Array.prototype.toString.call(r) && (r = JSON.stringify(r)),
                `${t}=${decodeURIComponent(r)}`
              )
            })
            .join('&')
          console.log('>>>>>> signContent: ', n)
          return s
            .createVerify(h.ALIPAY_ALGORITHM_MAPPING[r])
            .update(n, 'utf8')
            .verify(this.config.alipayPublicKey, t, 'base64')
        }
        getSignStr(e, t) {
          let r = e.trim()
          const n = e.indexOf(t + '"'),
            i = e.lastIndexOf('"sign"')
          return (
            (r = r.substr(n + t.length + 1)),
            (r = r.substr(0, i)),
            (r = r.replace(/^[^{]*{/g, '{')),
            (r = r.replace(/\}([^}]*)$/g, '}')),
            r
          )
        }
        exec(e, t = {}, r = {}) {
          if (r.formData)
            return r.formData.getFiles().length > 0 ? this.multipartExec(e, r) : this.pageExec(e, r)
          const n = this.config,
            s = h.sign(e, t, n),
            { url: a, execParams: o } = this.formatUrl(n.gateway, s),
            u = r.log && i.fn(r.log.info) ? r.log.info : null,
            c = r.log && i.fn(r.log.error) ? r.log.error : null
          return (
            u &&
              u('[AlipaySdk]start exec, url: %s, method: %s, params: %s', a, e, JSON.stringify(o)),
            new Promise((t, i) => {
              n.urllib
                .request(a, {
                  method: 'POST',
                  data: o,
                  dataType: 'text',
                  timeout: n.timeout,
                  headers: { 'user-agent': this.sdkVersion },
                })
                .then((s) => {
                  if ((u && u('[AlipaySdk]exec response: %s', s), 200 === s.status)) {
                    const a = JSON.parse(s.data),
                      o = e.replace(/\./g, '_') + '_response',
                      u = a[o]
                    if (u) {
                      !r.validateSign || this.checkResponseSign(s.data, o)
                        ? t(n.camelcase ? l(u, { deep: !0 }) : u)
                        : i({ serverResult: s, errorMessage: '[AlipaySdk]验签失败' })
                    }
                    i({ serverResult: s, errorMessage: '[AlipaySdk]HTTP 请求错误' })
                  }
                  i({ serverResult: s, errorMessage: '[AlipaySdk]HTTP 请求错误' })
                })
                .catch((e) => {
                  ;(e.message = '[AlipaySdk]exec error'), c && c(e), i(e)
                })
            })
          )
        }
        checkResponseSign(e, t) {
          if (!this.config.alipayPublicKey || '' === this.config.alipayPublicKey)
            return console.warn('config.alipayPublicKey is empty'), !0
          if (!e) return !1
          const r = this.getSignStr(e, t),
            n = JSON.parse(e).sign,
            i = s.createVerify(h.ALIPAY_ALGORITHM_MAPPING[this.config.signType])
          return i.update(r, 'utf8'), i.verify(this.config.alipayPublicKey, n, 'base64')
        }
        checkNotifySign(e) {
          const t = e.sign
          if (!this.config.alipayPublicKey || !t) return !1
          const r = e.sign_type || this.config.signType || 'RSA2',
            n = Object.assign({}, e)
          delete n.sign, (n.sign_type = r)
          return (
            !!this.notifyRSACheck(n, t, r) || (delete n.sign_type, this.notifyRSACheck(n, t, r))
          )
        }
      }
    },
    function (e, t, r) {
      'use strict'
      /**!
       * is
       * the definitive JavaScript type testing library
       *
       * @copyright 2013-2014 Enrico Marino / Jordan Harband
       * @license MIT
       */ var n,
        i,
        s = Object.prototype,
        a = s.hasOwnProperty,
        o = s.toString
      'function' == typeof Symbol && (n = Symbol.prototype.valueOf),
        'function' == typeof BigInt && (i = BigInt.prototype.valueOf)
      var u = function (e) {
          return e != e
        },
        c = { boolean: 1, number: 1, string: 1, undefined: 1 },
        l = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/,
        f = /^[A-Fa-f0-9]+$/,
        h = {}
      ;(h.a = h.type =
        function (e, t) {
          return typeof e === t
        }),
        (h.defined = function (e) {
          return void 0 !== e
        }),
        (h.empty = function (e) {
          var t,
            r = o.call(e)
          if ('[object Array]' === r || '[object Arguments]' === r || '[object String]' === r)
            return 0 === e.length
          if ('[object Object]' === r) {
            for (t in e) if (a.call(e, t)) return !1
            return !0
          }
          return !e
        }),
        (h.equal = function (e, t) {
          if (e === t) return !0
          var r,
            n = o.call(e)
          if (n !== o.call(t)) return !1
          if ('[object Object]' === n) {
            for (r in e) if (!h.equal(e[r], t[r]) || !(r in t)) return !1
            for (r in t) if (!h.equal(e[r], t[r]) || !(r in e)) return !1
            return !0
          }
          if ('[object Array]' === n) {
            if ((r = e.length) !== t.length) return !1
            for (; r--; ) if (!h.equal(e[r], t[r])) return !1
            return !0
          }
          return '[object Function]' === n
            ? e.prototype === t.prototype
            : '[object Date]' === n && e.getTime() === t.getTime()
        }),
        (h.hosted = function (e, t) {
          var r = typeof t[e]
          return 'object' === r ? !!t[e] : !c[r]
        }),
        (h.instance = h.instanceof =
          function (e, t) {
            return e instanceof t
          }),
        (h.nil = h.null =
          function (e) {
            return null === e
          }),
        (h.undef = h.undefined =
          function (e) {
            return void 0 === e
          }),
        (h.args = h.arguments =
          function (e) {
            var t = '[object Arguments]' === o.call(e),
              r = !h.array(e) && h.arraylike(e) && h.object(e) && h.fn(e.callee)
            return t || r
          }),
        (h.array =
          Array.isArray ||
          function (e) {
            return '[object Array]' === o.call(e)
          }),
        (h.args.empty = function (e) {
          return h.args(e) && 0 === e.length
        }),
        (h.array.empty = function (e) {
          return h.array(e) && 0 === e.length
        }),
        (h.arraylike = function (e) {
          return (
            !!e &&
            !h.bool(e) &&
            a.call(e, 'length') &&
            isFinite(e.length) &&
            h.number(e.length) &&
            e.length >= 0
          )
        }),
        (h.bool = h.boolean =
          function (e) {
            return '[object Boolean]' === o.call(e)
          }),
        (h.false = function (e) {
          return h.bool(e) && !1 === Boolean(Number(e))
        }),
        (h.true = function (e) {
          return h.bool(e) && !0 === Boolean(Number(e))
        }),
        (h.date = function (e) {
          return '[object Date]' === o.call(e)
        }),
        (h.date.valid = function (e) {
          return h.date(e) && !isNaN(Number(e))
        }),
        (h.element = function (e) {
          return (
            void 0 !== e &&
            'undefined' != typeof HTMLElement &&
            e instanceof HTMLElement &&
            1 === e.nodeType
          )
        }),
        (h.error = function (e) {
          return '[object Error]' === o.call(e)
        }),
        (h.fn = h.function =
          function (e) {
            if ('undefined' != typeof window && e === window.alert) return !0
            var t = o.call(e)
            return (
              '[object Function]' === t ||
              '[object GeneratorFunction]' === t ||
              '[object AsyncFunction]' === t
            )
          }),
        (h.number = function (e) {
          return '[object Number]' === o.call(e)
        }),
        (h.infinite = function (e) {
          return e === 1 / 0 || e === -1 / 0
        }),
        (h.decimal = function (e) {
          return h.number(e) && !u(e) && !h.infinite(e) && e % 1 != 0
        }),
        (h.divisibleBy = function (e, t) {
          var r = h.infinite(e),
            n = h.infinite(t),
            i = h.number(e) && !u(e) && h.number(t) && !u(t) && 0 !== t
          return r || n || (i && e % t == 0)
        }),
        (h.integer = h.int =
          function (e) {
            return h.number(e) && !u(e) && e % 1 == 0
          }),
        (h.maximum = function (e, t) {
          if (u(e)) throw new TypeError('NaN is not a valid value')
          if (!h.arraylike(t)) throw new TypeError('second argument must be array-like')
          for (var r = t.length; --r >= 0; ) if (e < t[r]) return !1
          return !0
        }),
        (h.minimum = function (e, t) {
          if (u(e)) throw new TypeError('NaN is not a valid value')
          if (!h.arraylike(t)) throw new TypeError('second argument must be array-like')
          for (var r = t.length; --r >= 0; ) if (e > t[r]) return !1
          return !0
        }),
        (h.nan = function (e) {
          return !h.number(e) || e != e
        }),
        (h.even = function (e) {
          return h.infinite(e) || (h.number(e) && e == e && e % 2 == 0)
        }),
        (h.odd = function (e) {
          return h.infinite(e) || (h.number(e) && e == e && e % 2 != 0)
        }),
        (h.ge = function (e, t) {
          if (u(e) || u(t)) throw new TypeError('NaN is not a valid value')
          return !h.infinite(e) && !h.infinite(t) && e >= t
        }),
        (h.gt = function (e, t) {
          if (u(e) || u(t)) throw new TypeError('NaN is not a valid value')
          return !h.infinite(e) && !h.infinite(t) && e > t
        }),
        (h.le = function (e, t) {
          if (u(e) || u(t)) throw new TypeError('NaN is not a valid value')
          return !h.infinite(e) && !h.infinite(t) && e <= t
        }),
        (h.lt = function (e, t) {
          if (u(e) || u(t)) throw new TypeError('NaN is not a valid value')
          return !h.infinite(e) && !h.infinite(t) && e < t
        }),
        (h.within = function (e, t, r) {
          if (u(e) || u(t) || u(r)) throw new TypeError('NaN is not a valid value')
          if (!h.number(e) || !h.number(t) || !h.number(r))
            throw new TypeError('all arguments must be numbers')
          return h.infinite(e) || h.infinite(t) || h.infinite(r) || (e >= t && e <= r)
        }),
        (h.object = function (e) {
          return '[object Object]' === o.call(e)
        }),
        (h.primitive = function (e) {
          return !e || !('object' == typeof e || h.object(e) || h.fn(e) || h.array(e))
        }),
        (h.hash = function (e) {
          return h.object(e) && e.constructor === Object && !e.nodeType && !e.setInterval
        }),
        (h.regexp = function (e) {
          return '[object RegExp]' === o.call(e)
        }),
        (h.string = function (e) {
          return '[object String]' === o.call(e)
        }),
        (h.base64 = function (e) {
          return h.string(e) && (!e.length || l.test(e))
        }),
        (h.hex = function (e) {
          return h.string(e) && (!e.length || f.test(e))
        }),
        (h.symbol = function (e) {
          return (
            'function' == typeof Symbol &&
            '[object Symbol]' === o.call(e) &&
            'symbol' == typeof n.call(e)
          )
        }),
        (h.bigint = function (e) {
          return (
            'function' == typeof BigInt &&
            '[object BigInt]' === o.call(e) &&
            'bigint' == typeof i.call(e)
          )
        }),
        (e.exports = h)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = uniCloud.httpclient
      ;(t.default = n), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      ;(t.default = {}), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      var n = r(26)
      var i = {
        Uri: {
          createUriRegex: function (e) {
            if ('object' != typeof (e = e || {}) || Array.isArray(e))
              throw new Error('options must be an object')
            var t = ''
            if (e.scheme) {
              if ((Array.isArray(e.scheme) || (e.scheme = [e.scheme]), e.scheme.length <= 0))
                throw new Error('scheme must have at least 1 scheme specified')
              for (var r = 0; r < e.scheme.length; ++r) {
                var i = e.scheme[r]
                if (!(i instanceof RegExp || 'string' == typeof i))
                  throw new Error('scheme must only contain Regular Expressions or Strings')
                if (((t += t ? '|' : ''), i instanceof RegExp)) t += i.source
                else {
                  if (!/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(i))
                    throw new Error('scheme at position ' + r + ' must be a valid scheme')
                  t += i.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&')
                }
              }
            }
            var s = '(?:' + (t || n.scheme) + ')'
            return new RegExp(
              '^(?:' + s + ':' + n.hierPart + ')(?:\\?' + n.query + ')?(?:#' + n.fragment + ')?$'
            )
          },
          uriRegex: new RegExp(n.uri),
        },
      }
      ;(i.Uri.isValid = function (e) {
        return i.Uri.uriRegex.test(e)
      }),
        (e.exports = {
          createUriRegex: i.Uri.createUriRegex,
          uriRegex: i.Uri.uriRegex,
          isValid: i.Uri.isValid,
        })
    },
    function (e, t, r) {
      'use strict'
      var n = {
        rfc3986: {},
        generate: function () {
          var e = '|'
          n.rfc3986.cidr = '[0-9]|[1-2][0-9]|3[0-2]'
          var t = "!\\$&'\\(\\)\\*\\+,;=",
            r = 'a-zA-Z0-9-\\._~%0-9A-Fa-f' + t + ':@',
            i = '(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])'
          n.rfc3986.IPv4address = '(?:' + i + '\\.){3}' + i
          var s = '[0-9A-Fa-f]{1,4}',
            a = '(?:' + s + ':' + s + '|' + n.rfc3986.IPv4address + ')',
            o = '(?:' + s + ':){6}' + a,
            u = '::(?:' + s + ':){5}' + a,
            c = '(?:' + s + ')?::(?:' + s + ':){4}' + a,
            l = '(?:(?:' + s + ':){0,1}' + s + ')?::(?:' + s + ':){3}' + a,
            f = '(?:(?:' + s + ':){0,2}' + s + ')?::(?:' + s + ':){2}' + a,
            h = '(?:(?:' + s + ':){0,3}' + s + ')?::' + s + ':' + a,
            p = '(?:(?:' + s + ':){0,4}' + s + ')?::' + a
          ;(n.rfc3986.IPv6address =
            '(?:' +
            o +
            e +
            u +
            e +
            c +
            e +
            l +
            e +
            f +
            e +
            h +
            e +
            p +
            '|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}' +
            '|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)'),
            (n.rfc3986.IPvFuture = 'v[0-9A-Fa-f]+\\.[a-zA-Z0-9-\\._~' + t + ':]+'),
            (n.rfc3986.scheme = '[a-zA-Z][a-zA-Z0-9+-\\.]*')
          n.rfc3986.IPLiteral = '\\[(?:' + n.rfc3986.IPv6address + e + n.rfc3986.IPvFuture + ')\\]'
          var d =
              "(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:]*@)?" +
              ('(?:' +
                n.rfc3986.IPLiteral +
                e +
                n.rfc3986.IPv4address +
                "|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=]{0,255})") +
              '(?::[0-9]*)?',
            y = "(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*"
          ;(n.rfc3986.hierPart =
            '(?:(?:\\/\\/' +
            d +
            y +
            ')' +
            "|\\/(?:[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)?" +
            "|[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]+(?:\\/[a-zA-Z0-9-\\._~%0-9A-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*)"),
            (n.rfc3986.query = '[' + r + '\\/\\?]*(?=#|$)'),
            (n.rfc3986.fragment = '[' + r + '\\/\\?]*'),
            (n.rfc3986.uri =
              '^(?:' +
              n.rfc3986.scheme +
              ':' +
              n.rfc3986.hierPart +
              ')(?:\\?' +
              n.rfc3986.query +
              ')?(?:#' +
              n.rfc3986.fragment +
              ')?$')
        },
      }
      n.generate(), (e.exports = n.rfc3986)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = r(2).camel2snake
      ;(t.default = n), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      const n = r(6),
        i = r(29),
        s = r(30),
        a = new s({ maxSize: 1e5 }),
        o = (e, t) => {
          const r = (t = Object.assign({ deep: !1 }, t)).exclude
          return n(
            e,
            (e, t) => {
              if (
                !r ||
                !((e, t) => e.some((e) => ('string' == typeof e ? e === t : e.test(t))))(r, e)
              )
                if (a.has(e)) e = a.get(e)
                else {
                  const t = i(e)
                  e.length < 100 && a.set(e, t), (e = t)
                }
              return [e, t]
            },
            { deep: t.deep }
          )
        }
      e.exports = (e, t) => (Array.isArray(e) ? Object.keys(e).map((r) => o(e[r], t)) : o(e, t))
    },
    function (e, t, r) {
      'use strict'
      function n(e) {
        let t = !1,
          r = !1,
          n = !1
        for (let i = 0; i < e.length; i++) {
          const s = e[i]
          t && /[a-zA-Z]/.test(s) && s.toUpperCase() === s
            ? ((e = e.substr(0, i) + '-' + e.substr(i)), (t = !1), (n = r), (r = !0), i++)
            : r && n && /[a-zA-Z]/.test(s) && s.toLowerCase() === s
            ? ((e = e.substr(0, i - 1) + '-' + e.substr(i - 1)), (n = r), (r = !1), (t = !0))
            : ((t = s.toLowerCase() === s), (n = r), (r = s.toUpperCase() === s))
        }
        return e
      }
      e.exports = function (e) {
        if (
          0 ===
          (e =
            arguments.length > 1
              ? Array.from(arguments)
                  .map((e) => e.trim())
                  .filter((e) => e.length)
                  .join('-')
              : e.trim()).length
        )
          return ''
        if (1 === e.length) return e.toLowerCase()
        if (/^[a-z0-9]+$/.test(e)) return e
        const t = e !== e.toLowerCase()
        return (
          t && (e = n(e)),
          e
            .replace(/^[_.\- ]+/, '')
            .toLowerCase()
            .replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase())
        )
      }
    },
    function (e, t, r) {
      'use strict'
      class n {
        constructor(e) {
          if (!((e = Object.assign({}, e)).maxSize && e.maxSize > 0))
            throw new TypeError('`maxSize` must be a number greater than 0')
          ;(this.maxSize = e.maxSize),
            (this.cache = new Map()),
            (this.oldCache = new Map()),
            (this._size = 0)
        }
        _set(e, t) {
          this.cache.set(e, t),
            this._size++,
            this._size >= this.maxSize &&
              ((this._size = 0), (this.oldCache = this.cache), (this.cache = new Map()))
        }
        get(e) {
          if (this.cache.has(e)) return this.cache.get(e)
          if (this.oldCache.has(e)) {
            const t = this.oldCache.get(e)
            return this._set(e, t), t
          }
        }
        set(e, t) {
          return this.cache.has(e) ? this.cache.set(e, t) : this._set(e, t), this
        }
        has(e) {
          return this.cache.has(e) || this.oldCache.has(e)
        }
        peek(e) {
          return this.cache.has(e)
            ? this.cache.get(e)
            : this.oldCache.has(e)
            ? this.oldCache.get(e)
            : void 0
        }
        delete(e) {
          this.cache.delete(e) && this._size--, this.oldCache.delete(e)
        }
        clear() {
          this.cache.clear(), this.oldCache.clear(), (this._size = 0)
        }
        *keys() {
          for (const e of this) yield e[0]
        }
        *values() {
          for (const e of this) yield e[1]
        }
        *[Symbol.iterator]() {
          for (const e of this.cache) yield e
          for (const e of this.oldCache) this.cache.has(e[0]) || (yield e)
        }
        get size() {
          let e = 0
          for (const t of this.oldCache) this.cache.has(t[0]) || e++
          return this._size + e
        }
      }
      e.exports = n
    },
    function (e, t, r) {
      var n = r(32)
      e.exports = function (e) {
        return n(e).replace(/\s/g, '_')
      }
    },
    function (e, t, r) {
      var n = r(33)
      e.exports = function (e) {
        return n(e).replace(/[\W_]+(.|$)/g, function (e, t) {
          return t ? ' ' + t : ''
        })
      }
    },
    function (e, t) {
      e.exports = function (e) {
        if (r.test(e)) return e.toLowerCase()
        i.test(e) &&
          (e = (function (e) {
            return e.replace(s, function (e, t) {
              return t ? ' ' + t : ''
            })
          })(e))
        n.test(e) &&
          (e = (function (e) {
            return e.replace(a, function (e, t, r) {
              return t + ' ' + r.toLowerCase().split('').join(' ')
            })
          })(e))
        return e.toLowerCase()
      }
      var r = /\s/,
        n = /[a-z][A-Z]/,
        i = /[\W_]/
      var s = /[\W_]+(.|$)/g
      var a = /(.)([A-Z]+)/g
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          return {
            format: function () {
              return (0, n.getFullTimeStr)((0, n.getOffsetDate)(8))
            },
          }
        })
      var n = r(2)
      e.exports = t.default
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = { encode: (e) => e }
      ;(t.default = n), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(5),
        i = r(37),
        s = r(0),
        a = r(38)
      function o(e, t = !1) {
        if (('string' == typeof e && (e = Buffer.from(e)), t))
          return (function (e) {
            const t = a.Certificate.fromPEMs(e)
            let r = ''
            return (
              t.forEach((e) => {
                if (e.signatureOID.startsWith('1.2.840.113549.1.1')) {
                  const t = u(e)
                  0 === r.length ? (r += t) : (r += '_' + t)
                }
              }),
              r
            )
          })(e)
        return u(a.Certificate.fromPEM(e))
      }
      function u(e) {
        const { issuer: t, serialNumber: r } = e,
          n = t.attributes
            .reduceRight((e, t) => {
              const { shortName: r, value: n } = t
              return `${e}${r}=${n},`
            }, '')
            .slice(0, -1),
          a = new i.default(r, 16).toString(10)
        return s
          .createHash('md5')
          .update(n + a, 'utf8')
          .digest('hex')
      }
      ;(t.loadPublicKeyFromPath = function (e) {
        const t = n.readFileSync(e)
        return a.Certificate.fromPEM(t).publicKeyRaw.toString('base64')
      }),
        (t.loadPublicKey = function (e) {
          return (
            'string' == typeof e && (e = Buffer.from(e)),
            a.Certificate.fromPEM(e).publicKeyRaw.toString('base64')
          )
        }),
        (t.getSNFromPath = function (e, t = !1) {
          return o(n.readFileSync(e), t)
        }),
        (t.getSN = o)
    },
    function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'BigNumber', function () {
          return b
        })
      var n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        i = Math.ceil,
        s = Math.floor,
        a = '[BigNumber Error] ',
        o = a + 'Number primitive has more than 15 significant digits: ',
        u = 1e14,
        c = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        l = 1e9
      function f(e) {
        var t = 0 | e
        return e > 0 || e === t ? t : t - 1
      }
      function h(e) {
        for (var t, r, n = 1, i = e.length, s = e[0] + ''; n < i; ) {
          for (r = 14 - (t = e[n++] + '').length; r--; t = '0' + t);
          s += t
        }
        for (i = s.length; 48 === s.charCodeAt(--i); );
        return s.slice(0, i + 1 || 1)
      }
      function p(e, t) {
        var r,
          n,
          i = e.c,
          s = t.c,
          a = e.s,
          o = t.s,
          u = e.e,
          c = t.e
        if (!a || !o) return null
        if (((r = i && !i[0]), (n = s && !s[0]), r || n)) return r ? (n ? 0 : -o) : a
        if (a != o) return a
        if (((r = a < 0), (n = u == c), !i || !s)) return n ? 0 : !i ^ r ? 1 : -1
        if (!n) return (u > c) ^ r ? 1 : -1
        for (o = (u = i.length) < (c = s.length) ? u : c, a = 0; a < o; a++)
          if (i[a] != s[a]) return (i[a] > s[a]) ^ r ? 1 : -1
        return u == c ? 0 : (u > c) ^ r ? 1 : -1
      }
      function d(e, t, r, n) {
        if (e < t || e > r || e !== s(e))
          throw Error(
            a +
              (n || 'Argument') +
              ('number' == typeof e
                ? e < t || e > r
                  ? ' out of range: '
                  : ' not an integer: '
                : ' not a primitive number: ') +
              String(e)
          )
      }
      function y(e) {
        var t = e.c.length - 1
        return f(e.e / 14) == t && e.c[t] % 2 != 0
      }
      function g(e, t) {
        return (e.length > 1 ? e.charAt(0) + '.' + e.slice(1) : e) + (t < 0 ? 'e' : 'e+') + t
      }
      function m(e, t, r) {
        var n, i
        if (t < 0) {
          for (i = r + '.'; ++t; i += r);
          e = i + e
        } else if (++t > (n = e.length)) {
          for (i = r, t -= n; --t; i += r);
          e += i
        } else t < n && (e = e.slice(0, t) + '.' + e.slice(t))
        return e
      }
      var b = (function e(t) {
        var r,
          b,
          E,
          S,
          A,
          N,
          I,
          w,
          v,
          T = (K.prototype = { constructor: K, toString: null, valueOf: null }),
          _ = new K(1),
          R = 20,
          C = 4,
          P = -7,
          O = 21,
          U = -1e7,
          x = 1e7,
          D = !1,
          B = 1,
          L = 0,
          M = {
            prefix: '',
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ',',
            decimalSeparator: '.',
            fractionGroupSize: 0,
            fractionGroupSeparator: ' ',
            suffix: '',
          },
          k = '0123456789abcdefghijklmnopqrstuvwxyz'
        function K(e, t) {
          var r,
            i,
            a,
            u,
            c,
            l,
            f,
            h,
            p = this
          if (!(p instanceof K)) return new K(e, t)
          if (null == t) {
            if (e && !0 === e._isBigNumber)
              return (
                (p.s = e.s),
                void (!e.c || e.e > x
                  ? (p.c = p.e = null)
                  : e.e < U
                  ? (p.c = [(p.e = 0)])
                  : ((p.e = e.e), (p.c = e.c.slice())))
              )
            if ((l = 'number' == typeof e) && 0 * e == 0) {
              if (((p.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                for (u = 0, c = e; c >= 10; c /= 10, u++);
                return void (u > x ? (p.c = p.e = null) : ((p.e = u), (p.c = [e])))
              }
              h = String(e)
            } else {
              if (!n.test((h = String(e)))) return E(p, h, l)
              p.s = 45 == h.charCodeAt(0) ? ((h = h.slice(1)), -1) : 1
            }
            ;(u = h.indexOf('.')) > -1 && (h = h.replace('.', '')),
              (c = h.search(/e/i)) > 0
                ? (u < 0 && (u = c), (u += +h.slice(c + 1)), (h = h.substring(0, c)))
                : u < 0 && (u = h.length)
          } else {
            if ((d(t, 2, k.length, 'Base'), 10 == t)) return $((p = new K(e)), R + p.e + 1, C)
            if (((h = String(e)), (l = 'number' == typeof e))) {
              if (0 * e != 0) return E(p, h, l, t)
              if (
                ((p.s = 1 / e < 0 ? ((h = h.slice(1)), -1) : 1),
                K.DEBUG && h.replace(/^0\.0*|\./, '').length > 15)
              )
                throw Error(o + e)
            } else p.s = 45 === h.charCodeAt(0) ? ((h = h.slice(1)), -1) : 1
            for (r = k.slice(0, t), u = c = 0, f = h.length; c < f; c++)
              if (r.indexOf((i = h.charAt(c))) < 0) {
                if ('.' == i) {
                  if (c > u) {
                    u = f
                    continue
                  }
                } else if (
                  !a &&
                  ((h == h.toUpperCase() && (h = h.toLowerCase())) ||
                    (h == h.toLowerCase() && (h = h.toUpperCase())))
                ) {
                  ;(a = !0), (c = -1), (u = 0)
                  continue
                }
                return E(p, String(e), l, t)
              }
            ;(l = !1),
              (u = (h = b(h, t, 10, p.s)).indexOf('.')) > -1
                ? (h = h.replace('.', ''))
                : (u = h.length)
          }
          for (c = 0; 48 === h.charCodeAt(c); c++);
          for (f = h.length; 48 === h.charCodeAt(--f); );
          if ((h = h.slice(c, ++f))) {
            if (((f -= c), l && K.DEBUG && f > 15 && (e > 9007199254740991 || e !== s(e))))
              throw Error(o + p.s * e)
            if ((u = u - c - 1) > x) p.c = p.e = null
            else if (u < U) p.c = [(p.e = 0)]
            else {
              if (((p.e = u), (p.c = []), (c = (u + 1) % 14), u < 0 && (c += 14), c < f)) {
                for (c && p.c.push(+h.slice(0, c)), f -= 14; c < f; )
                  p.c.push(+h.slice(c, (c += 14)))
                c = 14 - (h = h.slice(c)).length
              } else c -= f
              for (; c--; h += '0');
              p.c.push(+h)
            }
          } else p.c = [(p.e = 0)]
        }
        function j(e, t, r, n) {
          var i, s, a, o, u
          if ((null == r ? (r = C) : d(r, 0, 8), !e.c)) return e.toString()
          if (((i = e.c[0]), (a = e.e), null == t))
            (u = h(e.c)), (u = 1 == n || (2 == n && (a <= P || a >= O)) ? g(u, a) : m(u, a, '0'))
          else if (
            ((s = (e = $(new K(e), t, r)).e),
            (o = (u = h(e.c)).length),
            1 == n || (2 == n && (t <= s || s <= P)))
          ) {
            for (; o < t; u += '0', o++);
            u = g(u, s)
          } else if (((t -= a), (u = m(u, s, '0')), s + 1 > o)) {
            if (--t > 0) for (u += '.'; t--; u += '0');
          } else if ((t += s - o) > 0) for (s + 1 == o && (u += '.'); t--; u += '0');
          return e.s < 0 && i ? '-' + u : u
        }
        function F(e, t) {
          for (var r, n = 1, i = new K(e[0]); n < e.length; n++) {
            if (!(r = new K(e[n])).s) {
              i = r
              break
            }
            t.call(i, r) && (i = r)
          }
          return i
        }
        function V(e, t, r) {
          for (var n = 1, i = t.length; !t[--i]; t.pop());
          for (i = t[0]; i >= 10; i /= 10, n++);
          return (
            (r = n + 14 * r - 1) > x
              ? (e.c = e.e = null)
              : r < U
              ? (e.c = [(e.e = 0)])
              : ((e.e = r), (e.c = t)),
            e
          )
        }
        function $(e, t, r, n) {
          var a,
            o,
            l,
            f,
            h,
            p,
            d,
            y = e.c,
            g = c
          if (y) {
            e: {
              for (a = 1, f = y[0]; f >= 10; f /= 10, a++);
              if ((o = t - a) < 0)
                (o += 14), (l = t), (d = ((h = y[(p = 0)]) / g[a - l - 1]) % 10 | 0)
              else if ((p = i((o + 1) / 14)) >= y.length) {
                if (!n) break e
                for (; y.length <= p; y.push(0));
                ;(h = d = 0), (a = 1), (l = (o %= 14) - 14 + 1)
              } else {
                for (h = f = y[p], a = 1; f >= 10; f /= 10, a++);
                d = (l = (o %= 14) - 14 + a) < 0 ? 0 : (h / g[a - l - 1]) % 10 | 0
              }
              if (
                ((n = n || t < 0 || null != y[p + 1] || (l < 0 ? h : h % g[a - l - 1])),
                (n =
                  r < 4
                    ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                    : d > 5 ||
                      (5 == d &&
                        (4 == r ||
                          n ||
                          (6 == r && (o > 0 ? (l > 0 ? h / g[a - l] : 0) : y[p - 1]) % 10 & 1) ||
                          r == (e.s < 0 ? 8 : 7)))),
                t < 1 || !y[0])
              )
                return (
                  (y.length = 0),
                  n
                    ? ((t -= e.e + 1), (y[0] = g[(14 - (t % 14)) % 14]), (e.e = -t || 0))
                    : (y[0] = e.e = 0),
                  e
                )
              if (
                (0 == o
                  ? ((y.length = p), (f = 1), p--)
                  : ((y.length = p + 1),
                    (f = g[14 - o]),
                    (y[p] = l > 0 ? s((h / g[a - l]) % g[l]) * f : 0)),
                n)
              )
                for (;;) {
                  if (0 == p) {
                    for (o = 1, l = y[0]; l >= 10; l /= 10, o++);
                    for (l = y[0] += f, f = 1; l >= 10; l /= 10, f++);
                    o != f && (e.e++, y[0] == u && (y[0] = 1))
                    break
                  }
                  if (((y[p] += f), y[p] != u)) break
                  ;(y[p--] = 0), (f = 1)
                }
              for (o = y.length; 0 === y[--o]; y.pop());
            }
            e.e > x ? (e.c = e.e = null) : e.e < U && (e.c = [(e.e = 0)])
          }
          return e
        }
        function G(e) {
          var t,
            r = e.e
          return null === r
            ? e.toString()
            : ((t = h(e.c)), (t = r <= P || r >= O ? g(t, r) : m(t, r, '0')), e.s < 0 ? '-' + t : t)
        }
        return (
          (K.clone = e),
          (K.ROUND_UP = 0),
          (K.ROUND_DOWN = 1),
          (K.ROUND_CEIL = 2),
          (K.ROUND_FLOOR = 3),
          (K.ROUND_HALF_UP = 4),
          (K.ROUND_HALF_DOWN = 5),
          (K.ROUND_HALF_EVEN = 6),
          (K.ROUND_HALF_CEIL = 7),
          (K.ROUND_HALF_FLOOR = 8),
          (K.EUCLID = 9),
          (K.config = K.set =
            function (e) {
              var t, r
              if (null != e) {
                if ('object' != typeof e) throw Error(a + 'Object expected: ' + e)
                if (
                  (e.hasOwnProperty((t = 'DECIMAL_PLACES')) && (d((r = e[t]), 0, l, t), (R = r)),
                  e.hasOwnProperty((t = 'ROUNDING_MODE')) && (d((r = e[t]), 0, 8, t), (C = r)),
                  e.hasOwnProperty((t = 'EXPONENTIAL_AT')) &&
                    ((r = e[t]) && r.pop
                      ? (d(r[0], -l, 0, t), d(r[1], 0, l, t), (P = r[0]), (O = r[1]))
                      : (d(r, -l, l, t), (P = -(O = r < 0 ? -r : r)))),
                  e.hasOwnProperty((t = 'RANGE')))
                )
                  if ((r = e[t]) && r.pop)
                    d(r[0], -l, -1, t), d(r[1], 1, l, t), (U = r[0]), (x = r[1])
                  else {
                    if ((d(r, -l, l, t), !r)) throw Error(a + t + ' cannot be zero: ' + r)
                    U = -(x = r < 0 ? -r : r)
                  }
                if (e.hasOwnProperty((t = 'CRYPTO'))) {
                  if ((r = e[t]) !== !!r) throw Error(a + t + ' not true or false: ' + r)
                  if (r) {
                    if (
                      'undefined' == typeof crypto ||
                      !crypto ||
                      (!crypto.getRandomValues && !crypto.randomBytes)
                    )
                      throw ((D = !r), Error(a + 'crypto unavailable'))
                    D = r
                  } else D = r
                }
                if (
                  (e.hasOwnProperty((t = 'MODULO_MODE')) && (d((r = e[t]), 0, 9, t), (B = r)),
                  e.hasOwnProperty((t = 'POW_PRECISION')) && (d((r = e[t]), 0, l, t), (L = r)),
                  e.hasOwnProperty((t = 'FORMAT')))
                ) {
                  if ('object' != typeof (r = e[t])) throw Error(a + t + ' not an object: ' + r)
                  M = r
                }
                if (e.hasOwnProperty((t = 'ALPHABET'))) {
                  if ('string' != typeof (r = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(r))
                    throw Error(a + t + ' invalid: ' + r)
                  k = r
                }
              }
              return {
                DECIMAL_PLACES: R,
                ROUNDING_MODE: C,
                EXPONENTIAL_AT: [P, O],
                RANGE: [U, x],
                CRYPTO: D,
                MODULO_MODE: B,
                POW_PRECISION: L,
                FORMAT: M,
                ALPHABET: k,
              }
            }),
          (K.isBigNumber = function (e) {
            if (!e || !0 !== e._isBigNumber) return !1
            if (!K.DEBUG) return !0
            var t,
              r,
              n = e.c,
              i = e.e,
              o = e.s
            e: if ('[object Array]' == {}.toString.call(n)) {
              if ((1 === o || -1 === o) && i >= -l && i <= l && i === s(i)) {
                if (0 === n[0]) {
                  if (0 === i && 1 === n.length) return !0
                  break e
                }
                if (((t = (i + 1) % 14) < 1 && (t += 14), String(n[0]).length == t)) {
                  for (t = 0; t < n.length; t++) if ((r = n[t]) < 0 || r >= u || r !== s(r)) break e
                  if (0 !== r) return !0
                }
              }
            } else if (null === n && null === i && (null === o || 1 === o || -1 === o)) return !0
            throw Error(a + 'Invalid BigNumber: ' + e)
          }),
          (K.maximum = K.max =
            function () {
              return F(arguments, T.lt)
            }),
          (K.minimum = K.min =
            function () {
              return F(arguments, T.gt)
            }),
          (K.random =
            ((S =
              (9007199254740992 * Math.random()) & 2097151
                ? function () {
                    return s(9007199254740992 * Math.random())
                  }
                : function () {
                    return (
                      8388608 * ((1073741824 * Math.random()) | 0) + ((8388608 * Math.random()) | 0)
                    )
                  }),
            function (e) {
              var t,
                r,
                n,
                o,
                u,
                f = 0,
                h = [],
                p = new K(_)
              if ((null == e ? (e = R) : d(e, 0, l), (o = i(e / 14)), D))
                if (crypto.getRandomValues) {
                  for (t = crypto.getRandomValues(new Uint32Array((o *= 2))); f < o; )
                    (u = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15
                      ? ((r = crypto.getRandomValues(new Uint32Array(2))),
                        (t[f] = r[0]),
                        (t[f + 1] = r[1]))
                      : (h.push(u % 1e14), (f += 2))
                  f = o / 2
                } else {
                  if (!crypto.randomBytes) throw ((D = !1), Error(a + 'crypto unavailable'))
                  for (t = crypto.randomBytes((o *= 7)); f < o; )
                    (u =
                      281474976710656 * (31 & t[f]) +
                      1099511627776 * t[f + 1] +
                      4294967296 * t[f + 2] +
                      16777216 * t[f + 3] +
                      (t[f + 4] << 16) +
                      (t[f + 5] << 8) +
                      t[f + 6]) >= 9e15
                      ? crypto.randomBytes(7).copy(t, f)
                      : (h.push(u % 1e14), (f += 7))
                  f = o / 7
                }
              if (!D) for (; f < o; ) (u = S()) < 9e15 && (h[f++] = u % 1e14)
              for (
                e %= 14, (o = h[--f]) && e && ((u = c[14 - e]), (h[f] = s(o / u) * u));
                0 === h[f];
                h.pop(), f--
              );
              if (f < 0) h = [(n = 0)]
              else {
                for (n = -1; 0 === h[0]; h.splice(0, 1), n -= 14);
                for (f = 1, u = h[0]; u >= 10; u /= 10, f++);
                f < 14 && (n -= 14 - f)
              }
              return (p.e = n), (p.c = h), p
            })),
          (K.sum = function () {
            for (var e = 1, t = arguments, r = new K(t[0]); e < t.length; ) r = r.plus(t[e++])
            return r
          }),
          (b = (function () {
            function e(e, t, r, n) {
              for (var i, s, a = [0], o = 0, u = e.length; o < u; ) {
                for (s = a.length; s--; a[s] *= t);
                for (a[0] += n.indexOf(e.charAt(o++)), i = 0; i < a.length; i++)
                  a[i] > r - 1 &&
                    (null == a[i + 1] && (a[i + 1] = 0), (a[i + 1] += (a[i] / r) | 0), (a[i] %= r))
              }
              return a.reverse()
            }
            return function (t, n, i, s, a) {
              var o,
                u,
                c,
                l,
                f,
                p,
                d,
                y,
                g = t.indexOf('.'),
                b = R,
                E = C
              for (
                g >= 0 &&
                  ((l = L),
                  (L = 0),
                  (t = t.replace('.', '')),
                  (p = (y = new K(n)).pow(t.length - g)),
                  (L = l),
                  (y.c = e(m(h(p.c), p.e, '0'), 10, i, '0123456789')),
                  (y.e = y.c.length)),
                  c = l =
                    (d = e(t, n, i, a ? ((o = k), '0123456789') : ((o = '0123456789'), k))).length;
                0 == d[--l];
                d.pop()
              );
              if (!d[0]) return o.charAt(0)
              if (
                (g < 0
                  ? --c
                  : ((p.c = d),
                    (p.e = c),
                    (p.s = s),
                    (d = (p = r(p, y, b, E, i)).c),
                    (f = p.r),
                    (c = p.e)),
                (g = d[(u = c + b + 1)]),
                (l = i / 2),
                (f = f || u < 0 || null != d[u + 1]),
                (f =
                  E < 4
                    ? (null != g || f) && (0 == E || E == (p.s < 0 ? 3 : 2))
                    : g > l ||
                      (g == l &&
                        (4 == E || f || (6 == E && 1 & d[u - 1]) || E == (p.s < 0 ? 8 : 7)))),
                u < 1 || !d[0])
              )
                t = f ? m(o.charAt(1), -b, o.charAt(0)) : o.charAt(0)
              else {
                if (((d.length = u), f))
                  for (--i; ++d[--u] > i; ) (d[u] = 0), u || (++c, (d = [1].concat(d)))
                for (l = d.length; !d[--l]; );
                for (g = 0, t = ''; g <= l; t += o.charAt(d[g++]));
                t = m(t, c, o.charAt(0))
              }
              return t
            }
          })()),
          (r = (function () {
            function e(e, t, r) {
              var n,
                i,
                s,
                a,
                o = 0,
                u = e.length,
                c = t % 1e7,
                l = (t / 1e7) | 0
              for (e = e.slice(); u--; )
                (o =
                  (((i =
                    c * (s = e[u] % 1e7) +
                    ((n = l * s + (a = (e[u] / 1e7) | 0) * c) % 1e7) * 1e7 +
                    o) /
                    r) |
                    0) +
                  ((n / 1e7) | 0) +
                  l * a),
                  (e[u] = i % r)
              return o && (e = [o].concat(e)), e
            }
            function t(e, t, r, n) {
              var i, s
              if (r != n) s = r > n ? 1 : -1
              else
                for (i = s = 0; i < r; i++)
                  if (e[i] != t[i]) {
                    s = e[i] > t[i] ? 1 : -1
                    break
                  }
              return s
            }
            function r(e, t, r, n) {
              for (var i = 0; r--; )
                (e[r] -= i), (i = e[r] < t[r] ? 1 : 0), (e[r] = i * n + e[r] - t[r])
              for (; !e[0] && e.length > 1; e.splice(0, 1));
            }
            return function (n, i, a, o, c) {
              var l,
                h,
                p,
                d,
                y,
                g,
                m,
                b,
                E,
                S,
                A,
                N,
                I,
                w,
                v,
                T,
                _,
                R = n.s == i.s ? 1 : -1,
                C = n.c,
                P = i.c
              if (!(C && C[0] && P && P[0]))
                return new K(
                  n.s && i.s && (C ? !P || C[0] != P[0] : P)
                    ? (C && 0 == C[0]) || !P
                      ? 0 * R
                      : R / 0
                    : NaN
                )
              for (
                E = (b = new K(R)).c = [],
                  R = a + (h = n.e - i.e) + 1,
                  c || ((c = u), (h = f(n.e / 14) - f(i.e / 14)), (R = (R / 14) | 0)),
                  p = 0;
                P[p] == (C[p] || 0);
                p++
              );
              if ((P[p] > (C[p] || 0) && h--, R < 0)) E.push(1), (d = !0)
              else {
                for (
                  w = C.length,
                    T = P.length,
                    p = 0,
                    R += 2,
                    (y = s(c / (P[0] + 1))) > 1 &&
                      ((P = e(P, y, c)), (C = e(C, y, c)), (T = P.length), (w = C.length)),
                    I = T,
                    A = (S = C.slice(0, T)).length;
                  A < T;
                  S[A++] = 0
                );
                ;(_ = P.slice()), (_ = [0].concat(_)), (v = P[0]), P[1] >= c / 2 && v++
                do {
                  if (((y = 0), (l = t(P, S, T, A)) < 0)) {
                    if (((N = S[0]), T != A && (N = N * c + (S[1] || 0)), (y = s(N / v)) > 1))
                      for (
                        y >= c && (y = c - 1), m = (g = e(P, y, c)).length, A = S.length;
                        1 == t(g, S, m, A);

                      )
                        y--, r(g, T < m ? _ : P, m, c), (m = g.length), (l = 1)
                    else 0 == y && (l = y = 1), (m = (g = P.slice()).length)
                    if ((m < A && (g = [0].concat(g)), r(S, g, A, c), (A = S.length), -1 == l))
                      for (; t(P, S, T, A) < 1; ) y++, r(S, T < A ? _ : P, A, c), (A = S.length)
                  } else 0 === l && (y++, (S = [0]))
                  ;(E[p++] = y), S[0] ? (S[A++] = C[I] || 0) : ((S = [C[I]]), (A = 1))
                } while ((I++ < w || null != S[0]) && R--)
                ;(d = null != S[0]), E[0] || E.splice(0, 1)
              }
              if (c == u) {
                for (p = 1, R = E[0]; R >= 10; R /= 10, p++);
                $(b, a + (b.e = p + 14 * h - 1) + 1, o, d)
              } else (b.e = h), (b.r = +d)
              return b
            }
          })()),
          (A = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
          (N = /^([^.]+)\.$/),
          (I = /^\.([^.]+)$/),
          (w = /^-?(Infinity|NaN)$/),
          (v = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
          (E = function (e, t, r, n) {
            var i,
              s = r ? t : t.replace(v, '')
            if (w.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1
            else {
              if (
                !r &&
                ((s = s.replace(A, function (e, t, r) {
                  return (
                    (i = 'x' == (r = r.toLowerCase()) ? 16 : 'b' == r ? 2 : 8), n && n != i ? e : t
                  )
                })),
                n && ((i = n), (s = s.replace(N, '$1').replace(I, '0.$1'))),
                t != s)
              )
                return new K(s, i)
              if (K.DEBUG) throw Error(a + 'Not a' + (n ? ' base ' + n : '') + ' number: ' + t)
              e.s = null
            }
            e.c = e.e = null
          }),
          (T.absoluteValue = T.abs =
            function () {
              var e = new K(this)
              return e.s < 0 && (e.s = 1), e
            }),
          (T.comparedTo = function (e, t) {
            return p(this, new K(e, t))
          }),
          (T.decimalPlaces = T.dp =
            function (e, t) {
              var r,
                n,
                i,
                s = this
              if (null != e)
                return d(e, 0, l), null == t ? (t = C) : d(t, 0, 8), $(new K(s), e + s.e + 1, t)
              if (!(r = s.c)) return null
              if (((n = 14 * ((i = r.length - 1) - f(this.e / 14))), (i = r[i])))
                for (; i % 10 == 0; i /= 10, n--);
              return n < 0 && (n = 0), n
            }),
          (T.dividedBy = T.div =
            function (e, t) {
              return r(this, new K(e, t), R, C)
            }),
          (T.dividedToIntegerBy = T.idiv =
            function (e, t) {
              return r(this, new K(e, t), 0, 1)
            }),
          (T.exponentiatedBy = T.pow =
            function (e, t) {
              var r,
                n,
                o,
                u,
                c,
                l,
                f,
                h,
                p = this
              if ((e = new K(e)).c && !e.isInteger())
                throw Error(a + 'Exponent not an integer: ' + G(e))
              if (
                (null != t && (t = new K(t)),
                (c = e.e > 14),
                !p.c || !p.c[0] || (1 == p.c[0] && !p.e && 1 == p.c.length) || !e.c || !e.c[0])
              )
                return (h = new K(Math.pow(+G(p), c ? 2 - y(e) : +G(e)))), t ? h.mod(t) : h
              if (((l = e.s < 0), t)) {
                if (t.c ? !t.c[0] : !t.s) return new K(NaN)
                ;(n = !l && p.isInteger() && t.isInteger()) && (p = p.mod(t))
              } else {
                if (
                  e.e > 9 &&
                  (p.e > 0 ||
                    p.e < -1 ||
                    (0 == p.e
                      ? p.c[0] > 1 || (c && p.c[1] >= 24e7)
                      : p.c[0] < 8e13 || (c && p.c[0] <= 9999975e7)))
                )
                  return (
                    (u = p.s < 0 && y(e) ? -0 : 0), p.e > -1 && (u = 1 / u), new K(l ? 1 / u : u)
                  )
                L && (u = i(L / 14 + 2))
              }
              for (
                c
                  ? ((r = new K(0.5)), l && (e.s = 1), (f = y(e)))
                  : (f = (o = Math.abs(+G(e))) % 2),
                  h = new K(_);
                ;

              ) {
                if (f) {
                  if (!(h = h.times(p)).c) break
                  u ? h.c.length > u && (h.c.length = u) : n && (h = h.mod(t))
                }
                if (o) {
                  if (0 === (o = s(o / 2))) break
                  f = o % 2
                } else if (($((e = e.times(r)), e.e + 1, 1), e.e > 14)) f = y(e)
                else {
                  if (0 === (o = +G(e))) break
                  f = o % 2
                }
                ;(p = p.times(p)),
                  u ? p.c && p.c.length > u && (p.c.length = u) : n && (p = p.mod(t))
              }
              return n ? h : (l && (h = _.div(h)), t ? h.mod(t) : u ? $(h, L, C, void 0) : h)
            }),
          (T.integerValue = function (e) {
            var t = new K(this)
            return null == e ? (e = C) : d(e, 0, 8), $(t, t.e + 1, e)
          }),
          (T.isEqualTo = T.eq =
            function (e, t) {
              return 0 === p(this, new K(e, t))
            }),
          (T.isFinite = function () {
            return !!this.c
          }),
          (T.isGreaterThan = T.gt =
            function (e, t) {
              return p(this, new K(e, t)) > 0
            }),
          (T.isGreaterThanOrEqualTo = T.gte =
            function (e, t) {
              return 1 === (t = p(this, new K(e, t))) || 0 === t
            }),
          (T.isInteger = function () {
            return !!this.c && f(this.e / 14) > this.c.length - 2
          }),
          (T.isLessThan = T.lt =
            function (e, t) {
              return p(this, new K(e, t)) < 0
            }),
          (T.isLessThanOrEqualTo = T.lte =
            function (e, t) {
              return -1 === (t = p(this, new K(e, t))) || 0 === t
            }),
          (T.isNaN = function () {
            return !this.s
          }),
          (T.isNegative = function () {
            return this.s < 0
          }),
          (T.isPositive = function () {
            return this.s > 0
          }),
          (T.isZero = function () {
            return !!this.c && 0 == this.c[0]
          }),
          (T.minus = function (e, t) {
            var r,
              n,
              i,
              s,
              a = this,
              o = a.s
            if (((t = (e = new K(e, t)).s), !o || !t)) return new K(NaN)
            if (o != t) return (e.s = -t), a.plus(e)
            var c = a.e / 14,
              l = e.e / 14,
              h = a.c,
              p = e.c
            if (!c || !l) {
              if (!h || !p) return h ? ((e.s = -t), e) : new K(p ? a : NaN)
              if (!h[0] || !p[0]) return p[0] ? ((e.s = -t), e) : new K(h[0] ? a : 3 == C ? -0 : 0)
            }
            if (((c = f(c)), (l = f(l)), (h = h.slice()), (o = c - l))) {
              for (
                (s = o < 0) ? ((o = -o), (i = h)) : ((l = c), (i = p)), i.reverse(), t = o;
                t--;
                i.push(0)
              );
              i.reverse()
            } else
              for (n = (s = (o = h.length) < (t = p.length)) ? o : t, o = t = 0; t < n; t++)
                if (h[t] != p[t]) {
                  s = h[t] < p[t]
                  break
                }
            if (
              (s && ((i = h), (h = p), (p = i), (e.s = -e.s)),
              (t = (n = p.length) - (r = h.length)) > 0)
            )
              for (; t--; h[r++] = 0);
            for (t = u - 1; n > o; ) {
              if (h[--n] < p[n]) {
                for (r = n; r && !h[--r]; h[r] = t);
                --h[r], (h[n] += u)
              }
              h[n] -= p[n]
            }
            for (; 0 == h[0]; h.splice(0, 1), --l);
            return h[0] ? V(e, h, l) : ((e.s = 3 == C ? -1 : 1), (e.c = [(e.e = 0)]), e)
          }),
          (T.modulo = T.mod =
            function (e, t) {
              var n,
                i,
                s = this
              return (
                (e = new K(e, t)),
                !s.c || !e.s || (e.c && !e.c[0])
                  ? new K(NaN)
                  : !e.c || (s.c && !s.c[0])
                  ? new K(s)
                  : (9 == B
                      ? ((i = e.s), (e.s = 1), (n = r(s, e, 0, 3)), (e.s = i), (n.s *= i))
                      : (n = r(s, e, 0, B)),
                    (e = s.minus(n.times(e))).c[0] || 1 != B || (e.s = s.s),
                    e)
              )
            }),
          (T.multipliedBy = T.times =
            function (e, t) {
              var r,
                n,
                i,
                s,
                a,
                o,
                c,
                l,
                h,
                p,
                d,
                y,
                g,
                m,
                b = this,
                E = b.c,
                S = (e = new K(e, t)).c
              if (!(E && S && E[0] && S[0]))
                return (
                  !b.s || !e.s || (E && !E[0] && !S) || (S && !S[0] && !E)
                    ? (e.c = e.e = e.s = null)
                    : ((e.s *= b.s), E && S ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                  e
                )
              for (
                n = f(b.e / 14) + f(e.e / 14),
                  e.s *= b.s,
                  (c = E.length) < (p = S.length) &&
                    ((g = E), (E = S), (S = g), (i = c), (c = p), (p = i)),
                  i = c + p,
                  g = [];
                i--;
                g.push(0)
              );
              for (m = u, 1e7, i = p; --i >= 0; ) {
                for (r = 0, d = S[i] % 1e7, y = (S[i] / 1e7) | 0, s = i + (a = c); s > i; )
                  (r =
                    (((l =
                      d * (l = E[--a] % 1e7) +
                      ((o = y * l + (h = (E[a] / 1e7) | 0) * d) % 1e7) * 1e7 +
                      g[s] +
                      r) /
                      m) |
                      0) +
                    ((o / 1e7) | 0) +
                    y * h),
                    (g[s--] = l % m)
                g[s] = r
              }
              return r ? ++n : g.splice(0, 1), V(e, g, n)
            }),
          (T.negated = function () {
            var e = new K(this)
            return (e.s = -e.s || null), e
          }),
          (T.plus = function (e, t) {
            var r,
              n = this,
              i = n.s
            if (((t = (e = new K(e, t)).s), !i || !t)) return new K(NaN)
            if (i != t) return (e.s = -t), n.minus(e)
            var s = n.e / 14,
              a = e.e / 14,
              o = n.c,
              c = e.c
            if (!s || !a) {
              if (!o || !c) return new K(i / 0)
              if (!o[0] || !c[0]) return c[0] ? e : new K(o[0] ? n : 0 * i)
            }
            if (((s = f(s)), (a = f(a)), (o = o.slice()), (i = s - a))) {
              for (i > 0 ? ((a = s), (r = c)) : ((i = -i), (r = o)), r.reverse(); i--; r.push(0));
              r.reverse()
            }
            for (
              (i = o.length) - (t = c.length) < 0 && ((r = c), (c = o), (o = r), (t = i)), i = 0;
              t;

            )
              (i = ((o[--t] = o[t] + c[t] + i) / u) | 0), (o[t] = u === o[t] ? 0 : o[t] % u)
            return i && ((o = [i].concat(o)), ++a), V(e, o, a)
          }),
          (T.precision = T.sd =
            function (e, t) {
              var r,
                n,
                i,
                s = this
              if (null != e && e !== !!e)
                return d(e, 1, l), null == t ? (t = C) : d(t, 0, 8), $(new K(s), e, t)
              if (!(r = s.c)) return null
              if (((n = 14 * (i = r.length - 1) + 1), (i = r[i]))) {
                for (; i % 10 == 0; i /= 10, n--);
                for (i = r[0]; i >= 10; i /= 10, n++);
              }
              return e && s.e + 1 > n && (n = s.e + 1), n
            }),
          (T.shiftedBy = function (e) {
            return d(e, -9007199254740991, 9007199254740991), this.times('1e' + e)
          }),
          (T.squareRoot = T.sqrt =
            function () {
              var e,
                t,
                n,
                i,
                s,
                a = this,
                o = a.c,
                u = a.s,
                c = a.e,
                l = R + 4,
                p = new K('0.5')
              if (1 !== u || !o || !o[0])
                return new K(!u || (u < 0 && (!o || o[0])) ? NaN : o ? a : 1 / 0)
              if (
                (0 == (u = Math.sqrt(+G(a))) || u == 1 / 0
                  ? (((t = h(o)).length + c) % 2 == 0 && (t += '0'),
                    (u = Math.sqrt(+t)),
                    (c = f((c + 1) / 2) - (c < 0 || c % 2)),
                    (n = new K(
                      (t =
                        u == 1 / 0
                          ? '1e' + c
                          : (t = u.toExponential()).slice(0, t.indexOf('e') + 1) + c)
                    )))
                  : (n = new K(u + '')),
                n.c[0])
              )
                for ((u = (c = n.e) + l) < 3 && (u = 0); ; )
                  if (
                    ((s = n),
                    (n = p.times(s.plus(r(a, s, l, 1)))),
                    h(s.c).slice(0, u) === (t = h(n.c)).slice(0, u))
                  ) {
                    if (
                      (n.e < c && --u, '9999' != (t = t.slice(u - 3, u + 1)) && (i || '4999' != t))
                    ) {
                      ;(+t && (+t.slice(1) || '5' != t.charAt(0))) ||
                        ($(n, n.e + R + 2, 1), (e = !n.times(n).eq(a)))
                      break
                    }
                    if (!i && ($(s, s.e + R + 2, 0), s.times(s).eq(a))) {
                      n = s
                      break
                    }
                    ;(l += 4), (u += 4), (i = 1)
                  }
              return $(n, n.e + R + 1, C, e)
            }),
          (T.toExponential = function (e, t) {
            return null != e && (d(e, 0, l), e++), j(this, e, t, 1)
          }),
          (T.toFixed = function (e, t) {
            return null != e && (d(e, 0, l), (e = e + this.e + 1)), j(this, e, t)
          }),
          (T.toFormat = function (e, t, r) {
            var n,
              i = this
            if (null == r)
              null != e && t && 'object' == typeof t
                ? ((r = t), (t = null))
                : e && 'object' == typeof e
                ? ((r = e), (e = t = null))
                : (r = M)
            else if ('object' != typeof r) throw Error(a + 'Argument not an object: ' + r)
            if (((n = i.toFixed(e, t)), i.c)) {
              var s,
                o = n.split('.'),
                u = +r.groupSize,
                c = +r.secondaryGroupSize,
                l = r.groupSeparator || '',
                f = o[0],
                h = o[1],
                p = i.s < 0,
                d = p ? f.slice(1) : f,
                y = d.length
              if ((c && ((s = u), (u = c), (c = s), (y -= s)), u > 0 && y > 0)) {
                for (s = y % u || u, f = d.substr(0, s); s < y; s += u) f += l + d.substr(s, u)
                c > 0 && (f += l + d.slice(s)), p && (f = '-' + f)
              }
              n = h
                ? f +
                  (r.decimalSeparator || '') +
                  ((c = +r.fractionGroupSize)
                    ? h.replace(
                        new RegExp('\\d{' + c + '}\\B', 'g'),
                        '$&' + (r.fractionGroupSeparator || '')
                      )
                    : h)
                : f
            }
            return (r.prefix || '') + n + (r.suffix || '')
          }),
          (T.toFraction = function (e) {
            var t,
              n,
              i,
              s,
              o,
              u,
              l,
              f,
              p,
              d,
              y,
              g,
              m = this,
              b = m.c
            if (null != e && ((!(l = new K(e)).isInteger() && (l.c || 1 !== l.s)) || l.lt(_)))
              throw Error(
                a + 'Argument ' + (l.isInteger() ? 'out of range: ' : 'not an integer: ') + G(l)
              )
            if (!b) return new K(m)
            for (
              t = new K(_),
                p = n = new K(_),
                i = f = new K(_),
                g = h(b),
                o = t.e = g.length - m.e - 1,
                t.c[0] = c[(u = o % 14) < 0 ? 14 + u : u],
                e = !e || l.comparedTo(t) > 0 ? (o > 0 ? t : p) : l,
                u = x,
                x = 1 / 0,
                l = new K(g),
                f.c[0] = 0;
              (d = r(l, t, 0, 1)), 1 != (s = n.plus(d.times(i))).comparedTo(e);

            )
              (n = i),
                (i = s),
                (p = f.plus(d.times((s = p)))),
                (f = s),
                (t = l.minus(d.times((s = t)))),
                (l = s)
            return (
              (s = r(e.minus(n), i, 0, 1)),
              (f = f.plus(s.times(p))),
              (n = n.plus(s.times(i))),
              (f.s = p.s = m.s),
              (y =
                r(p, i, (o *= 2), C)
                  .minus(m)
                  .abs()
                  .comparedTo(r(f, n, o, C).minus(m).abs()) < 1
                  ? [p, i]
                  : [f, n]),
              (x = u),
              y
            )
          }),
          (T.toNumber = function () {
            return +G(this)
          }),
          (T.toPrecision = function (e, t) {
            return null != e && d(e, 1, l), j(this, e, t, 2)
          }),
          (T.toString = function (e) {
            var t,
              r = this,
              n = r.s,
              i = r.e
            return (
              null === i
                ? n
                  ? ((t = 'Infinity'), n < 0 && (t = '-' + t))
                  : (t = 'NaN')
                : (null == e
                    ? (t = i <= P || i >= O ? g(h(r.c), i) : m(h(r.c), i, '0'))
                    : 10 === e
                    ? (t = m(h((r = $(new K(r), R + i + 1, C)).c), r.e, '0'))
                    : (d(e, 2, k.length, 'Base'), (t = b(m(h(r.c), i, '0'), 10, e, n, !0))),
                  n < 0 && r.c[0] && (t = '-' + t)),
              t
            )
          }),
          (T.valueOf = T.toJSON =
            function () {
              return G(this)
            }),
          (T._isBigNumber = !0),
          (T[Symbol.toStringTag] = 'BigNumber'),
          (T[Symbol.for('nodejs.util.inspect.custom')] = T.valueOf),
          null != t && K.set(t),
          K
        )
      })()
      t.default = b
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = r(4)
      ;(t.bytesFromIP = n.bytesFromIP),
        (t.bytesToIP = n.bytesToIP),
        (t.getOID = n.getOID),
        (t.getOIDName = n.getOIDName)
      var i = r(9)
      ;(t.PublicKey = i.PublicKey),
        (t.PrivateKey = i.PrivateKey),
        (t.RSAPublicKey = i.RSAPublicKey),
        (t.RSAPrivateKey = i.RSAPrivateKey)
      var s = r(43)
      ;(t.Certificate = s.Certificate), (t.DistinguishedName = s.DistinguishedName)
    },
    function (e, t) {
      e.exports = require('net')
    },
    function (e, t, r) {
      !(function (e) {
        'use strict'
        var t = function (e) {
            var t,
              r = new Float64Array(16)
            if (e) for (t = 0; t < e.length; t++) r[t] = e[t]
            return r
          },
          n = function () {
            throw new Error('no PRNG')
          },
          i = new Uint8Array(16),
          s = new Uint8Array(32)
        s[0] = 9
        var a = t(),
          o = t([1]),
          u = t([56129, 1]),
          c = t([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139,
            11119, 27886, 20995,
          ]),
          l = t([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743,
            22239, 55772, 9222,
          ]),
          f = t([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316,
            21502, 52590, 14035, 8553,
          ]),
          h = t([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214,
          ]),
          p = t([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099,
            20417, 9344, 11139,
          ])
        function d(e, t, r, n) {
          ;(e[t] = (r >> 24) & 255),
            (e[t + 1] = (r >> 16) & 255),
            (e[t + 2] = (r >> 8) & 255),
            (e[t + 3] = 255 & r),
            (e[t + 4] = (n >> 24) & 255),
            (e[t + 5] = (n >> 16) & 255),
            (e[t + 6] = (n >> 8) & 255),
            (e[t + 7] = 255 & n)
        }
        function y(e, t, r, n, i) {
          var s,
            a = 0
          for (s = 0; s < i; s++) a |= e[t + s] ^ r[n + s]
          return (1 & ((a - 1) >>> 8)) - 1
        }
        function g(e, t, r, n) {
          return y(e, t, r, n, 16)
        }
        function m(e, t, r, n) {
          return y(e, t, r, n, 32)
        }
        function b(e, t, r, n) {
          !(function (e, t, r, n) {
            for (
              var i,
                s =
                  (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                a =
                  (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                o =
                  (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                u =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                c =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                l =
                  (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                f =
                  (255 & t[0]) | ((255 & t[1]) << 8) | ((255 & t[2]) << 16) | ((255 & t[3]) << 24),
                h =
                  (255 & t[4]) | ((255 & t[5]) << 8) | ((255 & t[6]) << 16) | ((255 & t[7]) << 24),
                p =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                d =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                y =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                g =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                m =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                b =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                E =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                S =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                A = s,
                N = a,
                I = o,
                w = u,
                v = c,
                T = l,
                _ = f,
                R = h,
                C = p,
                P = d,
                O = y,
                U = g,
                x = m,
                D = b,
                B = E,
                L = S,
                M = 0;
              M < 20;
              M += 2
            )
              (A ^=
                ((i =
                  ((x ^=
                    ((i =
                      ((C ^=
                        ((i = ((v ^= ((i = (A + x) | 0) << 7) | (i >>> 25)) + A) | 0) << 9) |
                        (i >>> 23)) +
                        v) |
                      0) <<
                      13) |
                    (i >>> 19)) +
                    C) |
                  0) <<
                  18) |
                (i >>> 14)),
                (T ^=
                  ((i =
                    ((N ^=
                      ((i =
                        ((D ^=
                          ((i = ((P ^= ((i = (T + N) | 0) << 7) | (i >>> 25)) + T) | 0) << 9) |
                          (i >>> 23)) +
                          P) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      D) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (O ^=
                  ((i =
                    ((_ ^=
                      ((i =
                        ((I ^=
                          ((i = ((B ^= ((i = (O + _) | 0) << 7) | (i >>> 25)) + O) | 0) << 9) |
                          (i >>> 23)) +
                          B) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      I) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (L ^=
                  ((i =
                    ((U ^=
                      ((i =
                        ((R ^=
                          ((i = ((w ^= ((i = (L + U) | 0) << 7) | (i >>> 25)) + L) | 0) << 9) |
                          (i >>> 23)) +
                          w) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      R) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (A ^=
                  ((i =
                    ((w ^=
                      ((i =
                        ((I ^=
                          ((i = ((N ^= ((i = (A + w) | 0) << 7) | (i >>> 25)) + A) | 0) << 9) |
                          (i >>> 23)) +
                          N) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      I) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (T ^=
                  ((i =
                    ((v ^=
                      ((i =
                        ((R ^=
                          ((i = ((_ ^= ((i = (T + v) | 0) << 7) | (i >>> 25)) + T) | 0) << 9) |
                          (i >>> 23)) +
                          _) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      R) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (O ^=
                  ((i =
                    ((P ^=
                      ((i =
                        ((C ^=
                          ((i = ((U ^= ((i = (O + P) | 0) << 7) | (i >>> 25)) + O) | 0) << 9) |
                          (i >>> 23)) +
                          U) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      C) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (L ^=
                  ((i =
                    ((B ^=
                      ((i =
                        ((D ^=
                          ((i = ((x ^= ((i = (L + B) | 0) << 7) | (i >>> 25)) + L) | 0) << 9) |
                          (i >>> 23)) +
                          x) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      D) |
                    0) <<
                    18) |
                  (i >>> 14))
            ;(A = (A + s) | 0),
              (N = (N + a) | 0),
              (I = (I + o) | 0),
              (w = (w + u) | 0),
              (v = (v + c) | 0),
              (T = (T + l) | 0),
              (_ = (_ + f) | 0),
              (R = (R + h) | 0),
              (C = (C + p) | 0),
              (P = (P + d) | 0),
              (O = (O + y) | 0),
              (U = (U + g) | 0),
              (x = (x + m) | 0),
              (D = (D + b) | 0),
              (B = (B + E) | 0),
              (L = (L + S) | 0),
              (e[0] = (A >>> 0) & 255),
              (e[1] = (A >>> 8) & 255),
              (e[2] = (A >>> 16) & 255),
              (e[3] = (A >>> 24) & 255),
              (e[4] = (N >>> 0) & 255),
              (e[5] = (N >>> 8) & 255),
              (e[6] = (N >>> 16) & 255),
              (e[7] = (N >>> 24) & 255),
              (e[8] = (I >>> 0) & 255),
              (e[9] = (I >>> 8) & 255),
              (e[10] = (I >>> 16) & 255),
              (e[11] = (I >>> 24) & 255),
              (e[12] = (w >>> 0) & 255),
              (e[13] = (w >>> 8) & 255),
              (e[14] = (w >>> 16) & 255),
              (e[15] = (w >>> 24) & 255),
              (e[16] = (v >>> 0) & 255),
              (e[17] = (v >>> 8) & 255),
              (e[18] = (v >>> 16) & 255),
              (e[19] = (v >>> 24) & 255),
              (e[20] = (T >>> 0) & 255),
              (e[21] = (T >>> 8) & 255),
              (e[22] = (T >>> 16) & 255),
              (e[23] = (T >>> 24) & 255),
              (e[24] = (_ >>> 0) & 255),
              (e[25] = (_ >>> 8) & 255),
              (e[26] = (_ >>> 16) & 255),
              (e[27] = (_ >>> 24) & 255),
              (e[28] = (R >>> 0) & 255),
              (e[29] = (R >>> 8) & 255),
              (e[30] = (R >>> 16) & 255),
              (e[31] = (R >>> 24) & 255),
              (e[32] = (C >>> 0) & 255),
              (e[33] = (C >>> 8) & 255),
              (e[34] = (C >>> 16) & 255),
              (e[35] = (C >>> 24) & 255),
              (e[36] = (P >>> 0) & 255),
              (e[37] = (P >>> 8) & 255),
              (e[38] = (P >>> 16) & 255),
              (e[39] = (P >>> 24) & 255),
              (e[40] = (O >>> 0) & 255),
              (e[41] = (O >>> 8) & 255),
              (e[42] = (O >>> 16) & 255),
              (e[43] = (O >>> 24) & 255),
              (e[44] = (U >>> 0) & 255),
              (e[45] = (U >>> 8) & 255),
              (e[46] = (U >>> 16) & 255),
              (e[47] = (U >>> 24) & 255),
              (e[48] = (x >>> 0) & 255),
              (e[49] = (x >>> 8) & 255),
              (e[50] = (x >>> 16) & 255),
              (e[51] = (x >>> 24) & 255),
              (e[52] = (D >>> 0) & 255),
              (e[53] = (D >>> 8) & 255),
              (e[54] = (D >>> 16) & 255),
              (e[55] = (D >>> 24) & 255),
              (e[56] = (B >>> 0) & 255),
              (e[57] = (B >>> 8) & 255),
              (e[58] = (B >>> 16) & 255),
              (e[59] = (B >>> 24) & 255),
              (e[60] = (L >>> 0) & 255),
              (e[61] = (L >>> 8) & 255),
              (e[62] = (L >>> 16) & 255),
              (e[63] = (L >>> 24) & 255)
          })(e, t, r, n)
        }
        function E(e, t, r, n) {
          !(function (e, t, r, n) {
            for (
              var i,
                s =
                  (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                a =
                  (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                o =
                  (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                u =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                c =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                l =
                  (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                f =
                  (255 & t[0]) | ((255 & t[1]) << 8) | ((255 & t[2]) << 16) | ((255 & t[3]) << 24),
                h =
                  (255 & t[4]) | ((255 & t[5]) << 8) | ((255 & t[6]) << 16) | ((255 & t[7]) << 24),
                p =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                d =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                y =
                  (255 & n[8]) |
                  ((255 & n[9]) << 8) |
                  ((255 & n[10]) << 16) |
                  ((255 & n[11]) << 24),
                g =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                m =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                b =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                E =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                S =
                  (255 & n[12]) |
                  ((255 & n[13]) << 8) |
                  ((255 & n[14]) << 16) |
                  ((255 & n[15]) << 24),
                A = 0;
              A < 20;
              A += 2
            )
              (s ^=
                ((i =
                  ((m ^=
                    ((i =
                      ((p ^=
                        ((i = ((c ^= ((i = (s + m) | 0) << 7) | (i >>> 25)) + s) | 0) << 9) |
                        (i >>> 23)) +
                        c) |
                      0) <<
                      13) |
                    (i >>> 19)) +
                    p) |
                  0) <<
                  18) |
                (i >>> 14)),
                (l ^=
                  ((i =
                    ((a ^=
                      ((i =
                        ((b ^=
                          ((i = ((d ^= ((i = (l + a) | 0) << 7) | (i >>> 25)) + l) | 0) << 9) |
                          (i >>> 23)) +
                          d) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      b) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (y ^=
                  ((i =
                    ((f ^=
                      ((i =
                        ((o ^=
                          ((i = ((E ^= ((i = (y + f) | 0) << 7) | (i >>> 25)) + y) | 0) << 9) |
                          (i >>> 23)) +
                          E) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      o) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (S ^=
                  ((i =
                    ((g ^=
                      ((i =
                        ((h ^=
                          ((i = ((u ^= ((i = (S + g) | 0) << 7) | (i >>> 25)) + S) | 0) << 9) |
                          (i >>> 23)) +
                          u) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      h) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (s ^=
                  ((i =
                    ((u ^=
                      ((i =
                        ((o ^=
                          ((i = ((a ^= ((i = (s + u) | 0) << 7) | (i >>> 25)) + s) | 0) << 9) |
                          (i >>> 23)) +
                          a) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      o) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (l ^=
                  ((i =
                    ((c ^=
                      ((i =
                        ((h ^=
                          ((i = ((f ^= ((i = (l + c) | 0) << 7) | (i >>> 25)) + l) | 0) << 9) |
                          (i >>> 23)) +
                          f) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      h) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (y ^=
                  ((i =
                    ((d ^=
                      ((i =
                        ((p ^=
                          ((i = ((g ^= ((i = (y + d) | 0) << 7) | (i >>> 25)) + y) | 0) << 9) |
                          (i >>> 23)) +
                          g) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      p) |
                    0) <<
                    18) |
                  (i >>> 14)),
                (S ^=
                  ((i =
                    ((E ^=
                      ((i =
                        ((b ^=
                          ((i = ((m ^= ((i = (S + E) | 0) << 7) | (i >>> 25)) + S) | 0) << 9) |
                          (i >>> 23)) +
                          m) |
                        0) <<
                        13) |
                      (i >>> 19)) +
                      b) |
                    0) <<
                    18) |
                  (i >>> 14))
            ;(e[0] = (s >>> 0) & 255),
              (e[1] = (s >>> 8) & 255),
              (e[2] = (s >>> 16) & 255),
              (e[3] = (s >>> 24) & 255),
              (e[4] = (l >>> 0) & 255),
              (e[5] = (l >>> 8) & 255),
              (e[6] = (l >>> 16) & 255),
              (e[7] = (l >>> 24) & 255),
              (e[8] = (y >>> 0) & 255),
              (e[9] = (y >>> 8) & 255),
              (e[10] = (y >>> 16) & 255),
              (e[11] = (y >>> 24) & 255),
              (e[12] = (S >>> 0) & 255),
              (e[13] = (S >>> 8) & 255),
              (e[14] = (S >>> 16) & 255),
              (e[15] = (S >>> 24) & 255),
              (e[16] = (f >>> 0) & 255),
              (e[17] = (f >>> 8) & 255),
              (e[18] = (f >>> 16) & 255),
              (e[19] = (f >>> 24) & 255),
              (e[20] = (h >>> 0) & 255),
              (e[21] = (h >>> 8) & 255),
              (e[22] = (h >>> 16) & 255),
              (e[23] = (h >>> 24) & 255),
              (e[24] = (p >>> 0) & 255),
              (e[25] = (p >>> 8) & 255),
              (e[26] = (p >>> 16) & 255),
              (e[27] = (p >>> 24) & 255),
              (e[28] = (d >>> 0) & 255),
              (e[29] = (d >>> 8) & 255),
              (e[30] = (d >>> 16) & 255),
              (e[31] = (d >>> 24) & 255)
          })(e, t, r, n)
        }
        var S = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
        ])
        function A(e, t, r, n, i, s, a) {
          var o,
            u,
            c = new Uint8Array(16),
            l = new Uint8Array(64)
          for (u = 0; u < 16; u++) c[u] = 0
          for (u = 0; u < 8; u++) c[u] = s[u]
          for (; i >= 64; ) {
            for (b(l, c, a, S), u = 0; u < 64; u++) e[t + u] = r[n + u] ^ l[u]
            for (o = 1, u = 8; u < 16; u++)
              (o = (o + (255 & c[u])) | 0), (c[u] = 255 & o), (o >>>= 8)
            ;(i -= 64), (t += 64), (n += 64)
          }
          if (i > 0) for (b(l, c, a, S), u = 0; u < i; u++) e[t + u] = r[n + u] ^ l[u]
          return 0
        }
        function N(e, t, r, n, i) {
          var s,
            a,
            o = new Uint8Array(16),
            u = new Uint8Array(64)
          for (a = 0; a < 16; a++) o[a] = 0
          for (a = 0; a < 8; a++) o[a] = n[a]
          for (; r >= 64; ) {
            for (b(u, o, i, S), a = 0; a < 64; a++) e[t + a] = u[a]
            for (s = 1, a = 8; a < 16; a++)
              (s = (s + (255 & o[a])) | 0), (o[a] = 255 & s), (s >>>= 8)
            ;(r -= 64), (t += 64)
          }
          if (r > 0) for (b(u, o, i, S), a = 0; a < r; a++) e[t + a] = u[a]
          return 0
        }
        function I(e, t, r, n, i) {
          var s = new Uint8Array(32)
          E(s, n, i, S)
          for (var a = new Uint8Array(8), o = 0; o < 8; o++) a[o] = n[o + 16]
          return N(e, t, r, a, s)
        }
        function w(e, t, r, n, i, s, a) {
          var o = new Uint8Array(32)
          E(o, s, a, S)
          for (var u = new Uint8Array(8), c = 0; c < 8; c++) u[c] = s[c + 16]
          return A(e, t, r, n, i, u, o)
        }
        var v = function (e) {
          var t, r, n, i, s, a, o, u
          ;(this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (t = (255 & e[0]) | ((255 & e[1]) << 8)),
            (this.r[0] = 8191 & t),
            (r = (255 & e[2]) | ((255 & e[3]) << 8)),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (n = (255 & e[4]) | ((255 & e[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
            (i = (255 & e[6]) | ((255 & e[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (i << 9))),
            (s = (255 & e[8]) | ((255 & e[9]) << 8)),
            (this.r[4] = 255 & ((i >>> 4) | (s << 12))),
            (this.r[5] = (s >>> 1) & 8190),
            (a = (255 & e[10]) | ((255 & e[11]) << 8)),
            (this.r[6] = 8191 & ((s >>> 14) | (a << 2))),
            (o = (255 & e[12]) | ((255 & e[13]) << 8)),
            (this.r[7] = 8065 & ((a >>> 11) | (o << 5))),
            (u = (255 & e[14]) | ((255 & e[15]) << 8)),
            (this.r[8] = 8191 & ((o >>> 8) | (u << 8))),
            (this.r[9] = (u >>> 5) & 127),
            (this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
            (this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
            (this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
            (this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
            (this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
            (this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
            (this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
            (this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8))
        }
        function T(e, t, r, n, i, s) {
          var a = new v(s)
          return a.update(r, n, i), a.finish(e, t), 0
        }
        function _(e, t, r, n, i, s) {
          var a = new Uint8Array(16)
          return T(a, 0, r, n, i, s), g(e, t, a, 0)
        }
        function R(e, t, r, n, i) {
          var s
          if (r < 32) return -1
          for (w(e, 0, t, 0, r, n, i), T(e, 16, e, 32, r - 32, e), s = 0; s < 16; s++) e[s] = 0
          return 0
        }
        function C(e, t, r, n, i) {
          var s,
            a = new Uint8Array(32)
          if (r < 32) return -1
          if ((I(a, 0, 32, n, i), 0 !== _(t, 16, t, 32, r - 32, a))) return -1
          for (w(e, 0, t, 0, r, n, i), s = 0; s < 32; s++) e[s] = 0
          return 0
        }
        function P(e, t) {
          var r
          for (r = 0; r < 16; r++) e[r] = 0 | t[r]
        }
        function O(e) {
          var t,
            r,
            n = 1
          for (t = 0; t < 16; t++)
            (r = e[t] + n + 65535), (n = Math.floor(r / 65536)), (e[t] = r - 65536 * n)
          e[0] += n - 1 + 37 * (n - 1)
        }
        function U(e, t, r) {
          for (var n, i = ~(r - 1), s = 0; s < 16; s++)
            (n = i & (e[s] ^ t[s])), (e[s] ^= n), (t[s] ^= n)
        }
        function x(e, r) {
          var n,
            i,
            s,
            a = t(),
            o = t()
          for (n = 0; n < 16; n++) o[n] = r[n]
          for (O(o), O(o), O(o), i = 0; i < 2; i++) {
            for (a[0] = o[0] - 65517, n = 1; n < 15; n++)
              (a[n] = o[n] - 65535 - ((a[n - 1] >> 16) & 1)), (a[n - 1] &= 65535)
            ;(a[15] = o[15] - 32767 - ((a[14] >> 16) & 1)),
              (s = (a[15] >> 16) & 1),
              (a[14] &= 65535),
              U(o, a, 1 - s)
          }
          for (n = 0; n < 16; n++) (e[2 * n] = 255 & o[n]), (e[2 * n + 1] = o[n] >> 8)
        }
        function D(e, t) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32)
          return x(r, e), x(n, t), m(r, 0, n, 0)
        }
        function B(e) {
          var t = new Uint8Array(32)
          return x(t, e), 1 & t[0]
        }
        function L(e, t) {
          var r
          for (r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8)
          e[15] &= 32767
        }
        function M(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] + r[n]
        }
        function k(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] - r[n]
        }
        function K(e, t, r) {
          var n,
            i,
            s = 0,
            a = 0,
            o = 0,
            u = 0,
            c = 0,
            l = 0,
            f = 0,
            h = 0,
            p = 0,
            d = 0,
            y = 0,
            g = 0,
            m = 0,
            b = 0,
            E = 0,
            S = 0,
            A = 0,
            N = 0,
            I = 0,
            w = 0,
            v = 0,
            T = 0,
            _ = 0,
            R = 0,
            C = 0,
            P = 0,
            O = 0,
            U = 0,
            x = 0,
            D = 0,
            B = 0,
            L = r[0],
            M = r[1],
            k = r[2],
            K = r[3],
            j = r[4],
            F = r[5],
            V = r[6],
            $ = r[7],
            G = r[8],
            q = r[9],
            z = r[10],
            W = r[11],
            Y = r[12],
            H = r[13],
            J = r[14],
            Z = r[15]
          ;(s += (n = t[0]) * L),
            (a += n * M),
            (o += n * k),
            (u += n * K),
            (c += n * j),
            (l += n * F),
            (f += n * V),
            (h += n * $),
            (p += n * G),
            (d += n * q),
            (y += n * z),
            (g += n * W),
            (m += n * Y),
            (b += n * H),
            (E += n * J),
            (S += n * Z),
            (a += (n = t[1]) * L),
            (o += n * M),
            (u += n * k),
            (c += n * K),
            (l += n * j),
            (f += n * F),
            (h += n * V),
            (p += n * $),
            (d += n * G),
            (y += n * q),
            (g += n * z),
            (m += n * W),
            (b += n * Y),
            (E += n * H),
            (S += n * J),
            (A += n * Z),
            (o += (n = t[2]) * L),
            (u += n * M),
            (c += n * k),
            (l += n * K),
            (f += n * j),
            (h += n * F),
            (p += n * V),
            (d += n * $),
            (y += n * G),
            (g += n * q),
            (m += n * z),
            (b += n * W),
            (E += n * Y),
            (S += n * H),
            (A += n * J),
            (N += n * Z),
            (u += (n = t[3]) * L),
            (c += n * M),
            (l += n * k),
            (f += n * K),
            (h += n * j),
            (p += n * F),
            (d += n * V),
            (y += n * $),
            (g += n * G),
            (m += n * q),
            (b += n * z),
            (E += n * W),
            (S += n * Y),
            (A += n * H),
            (N += n * J),
            (I += n * Z),
            (c += (n = t[4]) * L),
            (l += n * M),
            (f += n * k),
            (h += n * K),
            (p += n * j),
            (d += n * F),
            (y += n * V),
            (g += n * $),
            (m += n * G),
            (b += n * q),
            (E += n * z),
            (S += n * W),
            (A += n * Y),
            (N += n * H),
            (I += n * J),
            (w += n * Z),
            (l += (n = t[5]) * L),
            (f += n * M),
            (h += n * k),
            (p += n * K),
            (d += n * j),
            (y += n * F),
            (g += n * V),
            (m += n * $),
            (b += n * G),
            (E += n * q),
            (S += n * z),
            (A += n * W),
            (N += n * Y),
            (I += n * H),
            (w += n * J),
            (v += n * Z),
            (f += (n = t[6]) * L),
            (h += n * M),
            (p += n * k),
            (d += n * K),
            (y += n * j),
            (g += n * F),
            (m += n * V),
            (b += n * $),
            (E += n * G),
            (S += n * q),
            (A += n * z),
            (N += n * W),
            (I += n * Y),
            (w += n * H),
            (v += n * J),
            (T += n * Z),
            (h += (n = t[7]) * L),
            (p += n * M),
            (d += n * k),
            (y += n * K),
            (g += n * j),
            (m += n * F),
            (b += n * V),
            (E += n * $),
            (S += n * G),
            (A += n * q),
            (N += n * z),
            (I += n * W),
            (w += n * Y),
            (v += n * H),
            (T += n * J),
            (_ += n * Z),
            (p += (n = t[8]) * L),
            (d += n * M),
            (y += n * k),
            (g += n * K),
            (m += n * j),
            (b += n * F),
            (E += n * V),
            (S += n * $),
            (A += n * G),
            (N += n * q),
            (I += n * z),
            (w += n * W),
            (v += n * Y),
            (T += n * H),
            (_ += n * J),
            (R += n * Z),
            (d += (n = t[9]) * L),
            (y += n * M),
            (g += n * k),
            (m += n * K),
            (b += n * j),
            (E += n * F),
            (S += n * V),
            (A += n * $),
            (N += n * G),
            (I += n * q),
            (w += n * z),
            (v += n * W),
            (T += n * Y),
            (_ += n * H),
            (R += n * J),
            (C += n * Z),
            (y += (n = t[10]) * L),
            (g += n * M),
            (m += n * k),
            (b += n * K),
            (E += n * j),
            (S += n * F),
            (A += n * V),
            (N += n * $),
            (I += n * G),
            (w += n * q),
            (v += n * z),
            (T += n * W),
            (_ += n * Y),
            (R += n * H),
            (C += n * J),
            (P += n * Z),
            (g += (n = t[11]) * L),
            (m += n * M),
            (b += n * k),
            (E += n * K),
            (S += n * j),
            (A += n * F),
            (N += n * V),
            (I += n * $),
            (w += n * G),
            (v += n * q),
            (T += n * z),
            (_ += n * W),
            (R += n * Y),
            (C += n * H),
            (P += n * J),
            (O += n * Z),
            (m += (n = t[12]) * L),
            (b += n * M),
            (E += n * k),
            (S += n * K),
            (A += n * j),
            (N += n * F),
            (I += n * V),
            (w += n * $),
            (v += n * G),
            (T += n * q),
            (_ += n * z),
            (R += n * W),
            (C += n * Y),
            (P += n * H),
            (O += n * J),
            (U += n * Z),
            (b += (n = t[13]) * L),
            (E += n * M),
            (S += n * k),
            (A += n * K),
            (N += n * j),
            (I += n * F),
            (w += n * V),
            (v += n * $),
            (T += n * G),
            (_ += n * q),
            (R += n * z),
            (C += n * W),
            (P += n * Y),
            (O += n * H),
            (U += n * J),
            (x += n * Z),
            (E += (n = t[14]) * L),
            (S += n * M),
            (A += n * k),
            (N += n * K),
            (I += n * j),
            (w += n * F),
            (v += n * V),
            (T += n * $),
            (_ += n * G),
            (R += n * q),
            (C += n * z),
            (P += n * W),
            (O += n * Y),
            (U += n * H),
            (x += n * J),
            (D += n * Z),
            (S += (n = t[15]) * L),
            (a += 38 * (N += n * k)),
            (o += 38 * (I += n * K)),
            (u += 38 * (w += n * j)),
            (c += 38 * (v += n * F)),
            (l += 38 * (T += n * V)),
            (f += 38 * (_ += n * $)),
            (h += 38 * (R += n * G)),
            (p += 38 * (C += n * q)),
            (d += 38 * (P += n * z)),
            (y += 38 * (O += n * W)),
            (g += 38 * (U += n * Y)),
            (m += 38 * (x += n * H)),
            (b += 38 * (D += n * J)),
            (E += 38 * (B += n * Z)),
            (s =
              (n = (s += 38 * (A += n * M)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
            (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (o = (n = o + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (E = (n = E + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (S = (n = S + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (s =
              (n = (s += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) -
              65536 * (i = Math.floor(n / 65536))),
            (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (o = (n = o + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (E = (n = E + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (S = (n = S + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
            (s += i - 1 + 37 * (i - 1)),
            (e[0] = s),
            (e[1] = a),
            (e[2] = o),
            (e[3] = u),
            (e[4] = c),
            (e[5] = l),
            (e[6] = f),
            (e[7] = h),
            (e[8] = p),
            (e[9] = d),
            (e[10] = y),
            (e[11] = g),
            (e[12] = m),
            (e[13] = b),
            (e[14] = E),
            (e[15] = S)
        }
        function j(e, t) {
          K(e, t, t)
        }
        function F(e, r) {
          var n,
            i = t()
          for (n = 0; n < 16; n++) i[n] = r[n]
          for (n = 253; n >= 0; n--) j(i, i), 2 !== n && 4 !== n && K(i, i, r)
          for (n = 0; n < 16; n++) e[n] = i[n]
        }
        function V(e, r) {
          var n,
            i = t()
          for (n = 0; n < 16; n++) i[n] = r[n]
          for (n = 250; n >= 0; n--) j(i, i), 1 !== n && K(i, i, r)
          for (n = 0; n < 16; n++) e[n] = i[n]
        }
        function $(e, r, n) {
          var i,
            s,
            a = new Uint8Array(32),
            o = new Float64Array(80),
            c = t(),
            l = t(),
            f = t(),
            h = t(),
            p = t(),
            d = t()
          for (s = 0; s < 31; s++) a[s] = r[s]
          for (a[31] = (127 & r[31]) | 64, a[0] &= 248, L(o, n), s = 0; s < 16; s++)
            (l[s] = o[s]), (h[s] = c[s] = f[s] = 0)
          for (c[0] = h[0] = 1, s = 254; s >= 0; --s)
            U(c, l, (i = (a[s >>> 3] >>> (7 & s)) & 1)),
              U(f, h, i),
              M(p, c, f),
              k(c, c, f),
              M(f, l, h),
              k(l, l, h),
              j(h, p),
              j(d, c),
              K(c, f, c),
              K(f, l, p),
              M(p, c, f),
              k(c, c, f),
              j(l, c),
              k(f, h, d),
              K(c, f, u),
              M(c, c, h),
              K(f, f, c),
              K(c, h, d),
              K(h, l, o),
              j(l, p),
              U(c, l, i),
              U(f, h, i)
          for (s = 0; s < 16; s++)
            (o[s + 16] = c[s]), (o[s + 32] = f[s]), (o[s + 48] = l[s]), (o[s + 64] = h[s])
          var y = o.subarray(32),
            g = o.subarray(16)
          return F(y, y), K(g, g, y), x(e, g), 0
        }
        function G(e, t) {
          return $(e, t, s)
        }
        function q(e, t) {
          return n(t, 32), G(e, t)
        }
        function z(e, t, r) {
          var n = new Uint8Array(32)
          return $(n, r, t), E(e, i, n, S)
        }
        ;(v.prototype.blocks = function (e, t, r) {
          for (
            var n,
              i,
              s,
              a,
              o,
              u,
              c,
              l,
              f,
              h,
              p,
              d,
              y,
              g,
              m,
              b,
              E,
              S,
              A,
              N = this.fin ? 0 : 2048,
              I = this.h[0],
              w = this.h[1],
              v = this.h[2],
              T = this.h[3],
              _ = this.h[4],
              R = this.h[5],
              C = this.h[6],
              P = this.h[7],
              O = this.h[8],
              U = this.h[9],
              x = this.r[0],
              D = this.r[1],
              B = this.r[2],
              L = this.r[3],
              M = this.r[4],
              k = this.r[5],
              K = this.r[6],
              j = this.r[7],
              F = this.r[8],
              V = this.r[9];
            r >= 16;

          )
            (h = f = 0),
              (h += (I += 8191 & (n = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8))) * x),
              (h +=
                (w +=
                  8191 & ((n >>> 13) | ((i = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)) << 3))) *
                (5 * V)),
              (h +=
                (v +=
                  8191 & ((i >>> 10) | ((s = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)) << 6))) *
                (5 * F)),
              (h +=
                (T +=
                  8191 & ((s >>> 7) | ((a = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)) << 9))) *
                (5 * j)),
              (f =
                (h +=
                  (_ +=
                    8191 & ((a >>> 4) | ((o = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)) << 12))) *
                  (5 * K)) >>> 13),
              (h &= 8191),
              (h += (R += (o >>> 1) & 8191) * (5 * k)),
              (h +=
                (C +=
                  8191 & ((o >>> 14) | ((u = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)) << 2))) *
                (5 * M)),
              (h +=
                (P +=
                  8191 & ((u >>> 11) | ((c = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)) << 5))) *
                (5 * L)),
              (h +=
                (O +=
                  8191 & ((c >>> 8) | ((l = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)) << 8))) *
                (5 * B)),
              (p = f += (h += (U += (l >>> 5) | N) * (5 * D)) >>> 13),
              (p += I * D),
              (p += w * x),
              (p += v * (5 * V)),
              (p += T * (5 * F)),
              (f = (p += _ * (5 * j)) >>> 13),
              (p &= 8191),
              (p += R * (5 * K)),
              (p += C * (5 * k)),
              (p += P * (5 * M)),
              (p += O * (5 * L)),
              (f += (p += U * (5 * B)) >>> 13),
              (p &= 8191),
              (d = f),
              (d += I * B),
              (d += w * D),
              (d += v * x),
              (d += T * (5 * V)),
              (f = (d += _ * (5 * F)) >>> 13),
              (d &= 8191),
              (d += R * (5 * j)),
              (d += C * (5 * K)),
              (d += P * (5 * k)),
              (d += O * (5 * M)),
              (y = f += (d += U * (5 * L)) >>> 13),
              (y += I * L),
              (y += w * B),
              (y += v * D),
              (y += T * x),
              (f = (y += _ * (5 * V)) >>> 13),
              (y &= 8191),
              (y += R * (5 * F)),
              (y += C * (5 * j)),
              (y += P * (5 * K)),
              (y += O * (5 * k)),
              (g = f += (y += U * (5 * M)) >>> 13),
              (g += I * M),
              (g += w * L),
              (g += v * B),
              (g += T * D),
              (f = (g += _ * x) >>> 13),
              (g &= 8191),
              (g += R * (5 * V)),
              (g += C * (5 * F)),
              (g += P * (5 * j)),
              (g += O * (5 * K)),
              (m = f += (g += U * (5 * k)) >>> 13),
              (m += I * k),
              (m += w * M),
              (m += v * L),
              (m += T * B),
              (f = (m += _ * D) >>> 13),
              (m &= 8191),
              (m += R * x),
              (m += C * (5 * V)),
              (m += P * (5 * F)),
              (m += O * (5 * j)),
              (b = f += (m += U * (5 * K)) >>> 13),
              (b += I * K),
              (b += w * k),
              (b += v * M),
              (b += T * L),
              (f = (b += _ * B) >>> 13),
              (b &= 8191),
              (b += R * D),
              (b += C * x),
              (b += P * (5 * V)),
              (b += O * (5 * F)),
              (E = f += (b += U * (5 * j)) >>> 13),
              (E += I * j),
              (E += w * K),
              (E += v * k),
              (E += T * M),
              (f = (E += _ * L) >>> 13),
              (E &= 8191),
              (E += R * B),
              (E += C * D),
              (E += P * x),
              (E += O * (5 * V)),
              (S = f += (E += U * (5 * F)) >>> 13),
              (S += I * F),
              (S += w * j),
              (S += v * K),
              (S += T * k),
              (f = (S += _ * M) >>> 13),
              (S &= 8191),
              (S += R * L),
              (S += C * B),
              (S += P * D),
              (S += O * x),
              (A = f += (S += U * (5 * V)) >>> 13),
              (A += I * V),
              (A += w * F),
              (A += v * j),
              (A += T * K),
              (f = (A += _ * k) >>> 13),
              (A &= 8191),
              (A += R * M),
              (A += C * L),
              (A += P * B),
              (A += O * D),
              (I = h =
                8191 & (f = ((f = (((f += (A += U * x) >>> 13) << 2) + f) | 0) + (h &= 8191)) | 0)),
              (w = p += f >>>= 13),
              (v = d &= 8191),
              (T = y &= 8191),
              (_ = g &= 8191),
              (R = m &= 8191),
              (C = b &= 8191),
              (P = E &= 8191),
              (O = S &= 8191),
              (U = A &= 8191),
              (t += 16),
              (r -= 16)
          ;(this.h[0] = I),
            (this.h[1] = w),
            (this.h[2] = v),
            (this.h[3] = T),
            (this.h[4] = _),
            (this.h[5] = R),
            (this.h[6] = C),
            (this.h[7] = P),
            (this.h[8] = O),
            (this.h[9] = U)
        }),
          (v.prototype.finish = function (e, t) {
            var r,
              n,
              i,
              s,
              a = new Uint16Array(10)
            if (this.leftover) {
              for (s = this.leftover, this.buffer[s++] = 1; s < 16; s++) this.buffer[s] = 0
              ;(this.fin = 1), this.blocks(this.buffer, 0, 16)
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, s = 2; s < 10; s++)
              (this.h[s] += r), (r = this.h[s] >>> 13), (this.h[s] &= 8191)
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                a[0] = this.h[0] + 5,
                r = a[0] >>> 13,
                a[0] &= 8191,
                s = 1;
              s < 10;
              s++
            )
              (a[s] = this.h[s] + r), (r = a[s] >>> 13), (a[s] &= 8191)
            for (a[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) a[s] &= n
            for (n = ~n, s = 0; s < 10; s++) this.h[s] = (this.h[s] & n) | a[s]
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] = 65535 & ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                i = this.h[0] + this.pad[0],
                this.h[0] = 65535 & i,
                s = 1;
              s < 8;
              s++
            )
              (i = (((this.h[s] + this.pad[s]) | 0) + (i >>> 16)) | 0), (this.h[s] = 65535 & i)
            ;(e[t + 0] = (this.h[0] >>> 0) & 255),
              (e[t + 1] = (this.h[0] >>> 8) & 255),
              (e[t + 2] = (this.h[1] >>> 0) & 255),
              (e[t + 3] = (this.h[1] >>> 8) & 255),
              (e[t + 4] = (this.h[2] >>> 0) & 255),
              (e[t + 5] = (this.h[2] >>> 8) & 255),
              (e[t + 6] = (this.h[3] >>> 0) & 255),
              (e[t + 7] = (this.h[3] >>> 8) & 255),
              (e[t + 8] = (this.h[4] >>> 0) & 255),
              (e[t + 9] = (this.h[4] >>> 8) & 255),
              (e[t + 10] = (this.h[5] >>> 0) & 255),
              (e[t + 11] = (this.h[5] >>> 8) & 255),
              (e[t + 12] = (this.h[6] >>> 0) & 255),
              (e[t + 13] = (this.h[6] >>> 8) & 255),
              (e[t + 14] = (this.h[7] >>> 0) & 255),
              (e[t + 15] = (this.h[7] >>> 8) & 255)
          }),
          (v.prototype.update = function (e, t, r) {
            var n, i
            if (this.leftover) {
              for ((i = 16 - this.leftover) > r && (i = r), n = 0; n < i; n++)
                this.buffer[this.leftover + n] = e[t + n]
              if (((r -= i), (t += i), (this.leftover += i), this.leftover < 16)) return
              this.blocks(this.buffer, 0, 16), (this.leftover = 0)
            }
            if ((r >= 16 && ((i = r - (r % 16)), this.blocks(e, t, i), (t += i), (r -= i)), r)) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = e[t + n]
              this.leftover += r
            }
          })
        var W = R,
          Y = C
        var H = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573,
          2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579,
          2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278,
          1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113,
          2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
          1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882,
          3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956,
          3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485,
          1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350,
          1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
          3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752,
          506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571,
          3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899,
          1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424,
          442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606,
          3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270,
          289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851,
          1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ]
        function J(e, t, r, n) {
          for (
            var i,
              s,
              a,
              o,
              u,
              c,
              l,
              f,
              h,
              p,
              d,
              y,
              g,
              m,
              b,
              E,
              S,
              A,
              N,
              I,
              w,
              v,
              T,
              _,
              R,
              C,
              P = new Int32Array(16),
              O = new Int32Array(16),
              U = e[0],
              x = e[1],
              D = e[2],
              B = e[3],
              L = e[4],
              M = e[5],
              k = e[6],
              K = e[7],
              j = t[0],
              F = t[1],
              V = t[2],
              $ = t[3],
              G = t[4],
              q = t[5],
              z = t[6],
              W = t[7],
              Y = 0;
            n >= 128;

          ) {
            for (N = 0; N < 16; N++)
              (I = 8 * N + Y),
                (P[N] = (r[I + 0] << 24) | (r[I + 1] << 16) | (r[I + 2] << 8) | r[I + 3]),
                (O[N] = (r[I + 4] << 24) | (r[I + 5] << 16) | (r[I + 6] << 8) | r[I + 7])
            for (N = 0; N < 80; N++)
              if (
                ((i = U),
                (s = x),
                (a = D),
                (o = B),
                (u = L),
                (c = M),
                (l = k),
                K,
                (h = j),
                (p = F),
                (d = V),
                (y = $),
                (g = G),
                (m = q),
                (b = z),
                W,
                (T = 65535 & (v = W)),
                (_ = v >>> 16),
                (R = 65535 & (w = K)),
                (C = w >>> 16),
                (T +=
                  65535 &
                  (v =
                    ((G >>> 14) | (L << 18)) ^ ((G >>> 18) | (L << 14)) ^ ((L >>> 9) | (G << 23)))),
                (_ += v >>> 16),
                (R +=
                  65535 &
                  (w =
                    ((L >>> 14) | (G << 18)) ^ ((L >>> 18) | (G << 14)) ^ ((G >>> 9) | (L << 23)))),
                (C += w >>> 16),
                (T += 65535 & (v = (G & q) ^ (~G & z))),
                (_ += v >>> 16),
                (R += 65535 & (w = (L & M) ^ (~L & k))),
                (C += w >>> 16),
                (T += 65535 & (v = H[2 * N + 1])),
                (_ += v >>> 16),
                (R += 65535 & (w = H[2 * N])),
                (C += w >>> 16),
                (w = P[N % 16]),
                (_ += (v = O[N % 16]) >>> 16),
                (R += 65535 & w),
                (C += w >>> 16),
                (R += (_ += (T += 65535 & v) >>> 16) >>> 16),
                (T = 65535 & (v = A = (65535 & T) | (_ << 16))),
                (_ = v >>> 16),
                (R = 65535 & (w = S = (65535 & R) | ((C += R >>> 16) << 16))),
                (C = w >>> 16),
                (T +=
                  65535 &
                  (v =
                    ((j >>> 28) | (U << 4)) ^ ((U >>> 2) | (j << 30)) ^ ((U >>> 7) | (j << 25)))),
                (_ += v >>> 16),
                (R +=
                  65535 &
                  (w =
                    ((U >>> 28) | (j << 4)) ^ ((j >>> 2) | (U << 30)) ^ ((j >>> 7) | (U << 25)))),
                (C += w >>> 16),
                (_ += (v = (j & F) ^ (j & V) ^ (F & V)) >>> 16),
                (R += 65535 & (w = (U & x) ^ (U & D) ^ (x & D))),
                (C += w >>> 16),
                (f =
                  (65535 & (R += (_ += (T += 65535 & v) >>> 16) >>> 16)) | ((C += R >>> 16) << 16)),
                (E = (65535 & T) | (_ << 16)),
                (T = 65535 & (v = y)),
                (_ = v >>> 16),
                (R = 65535 & (w = o)),
                (C = w >>> 16),
                (_ += (v = A) >>> 16),
                (R += 65535 & (w = S)),
                (C += w >>> 16),
                (x = i),
                (D = s),
                (B = a),
                (L = o =
                  (65535 & (R += (_ += (T += 65535 & v) >>> 16) >>> 16)) | ((C += R >>> 16) << 16)),
                (M = u),
                (k = c),
                (K = l),
                (U = f),
                (F = h),
                (V = p),
                ($ = d),
                (G = y = (65535 & T) | (_ << 16)),
                (q = g),
                (z = m),
                (W = b),
                (j = E),
                N % 16 == 15)
              )
                for (I = 0; I < 16; I++)
                  (w = P[I]),
                    (T = 65535 & (v = O[I])),
                    (_ = v >>> 16),
                    (R = 65535 & w),
                    (C = w >>> 16),
                    (w = P[(I + 9) % 16]),
                    (T += 65535 & (v = O[(I + 9) % 16])),
                    (_ += v >>> 16),
                    (R += 65535 & w),
                    (C += w >>> 16),
                    (S = P[(I + 1) % 16]),
                    (T +=
                      65535 &
                      (v =
                        (((A = O[(I + 1) % 16]) >>> 1) | (S << 31)) ^
                        ((A >>> 8) | (S << 24)) ^
                        ((A >>> 7) | (S << 25)))),
                    (_ += v >>> 16),
                    (R +=
                      65535 & (w = ((S >>> 1) | (A << 31)) ^ ((S >>> 8) | (A << 24)) ^ (S >>> 7))),
                    (C += w >>> 16),
                    (S = P[(I + 14) % 16]),
                    (_ +=
                      (v =
                        (((A = O[(I + 14) % 16]) >>> 19) | (S << 13)) ^
                        ((S >>> 29) | (A << 3)) ^
                        ((A >>> 6) | (S << 26))) >>> 16),
                    (R +=
                      65535 & (w = ((S >>> 19) | (A << 13)) ^ ((A >>> 29) | (S << 3)) ^ (S >>> 6))),
                    (C += w >>> 16),
                    (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
                    (P[I] = (65535 & R) | (C << 16)),
                    (O[I] = (65535 & T) | (_ << 16))
            ;(T = 65535 & (v = j)),
              (_ = v >>> 16),
              (R = 65535 & (w = U)),
              (C = w >>> 16),
              (w = e[0]),
              (_ += (v = t[0]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[0] = U = (65535 & R) | (C << 16)),
              (t[0] = j = (65535 & T) | (_ << 16)),
              (T = 65535 & (v = F)),
              (_ = v >>> 16),
              (R = 65535 & (w = x)),
              (C = w >>> 16),
              (w = e[1]),
              (_ += (v = t[1]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[1] = x = (65535 & R) | (C << 16)),
              (t[1] = F = (65535 & T) | (_ << 16)),
              (T = 65535 & (v = V)),
              (_ = v >>> 16),
              (R = 65535 & (w = D)),
              (C = w >>> 16),
              (w = e[2]),
              (_ += (v = t[2]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[2] = D = (65535 & R) | (C << 16)),
              (t[2] = V = (65535 & T) | (_ << 16)),
              (T = 65535 & (v = $)),
              (_ = v >>> 16),
              (R = 65535 & (w = B)),
              (C = w >>> 16),
              (w = e[3]),
              (_ += (v = t[3]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[3] = B = (65535 & R) | (C << 16)),
              (t[3] = $ = (65535 & T) | (_ << 16)),
              (T = 65535 & (v = G)),
              (_ = v >>> 16),
              (R = 65535 & (w = L)),
              (C = w >>> 16),
              (w = e[4]),
              (_ += (v = t[4]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[4] = L = (65535 & R) | (C << 16)),
              (t[4] = G = (65535 & T) | (_ << 16)),
              (T = 65535 & (v = q)),
              (_ = v >>> 16),
              (R = 65535 & (w = M)),
              (C = w >>> 16),
              (w = e[5]),
              (_ += (v = t[5]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[5] = M = (65535 & R) | (C << 16)),
              (t[5] = q = (65535 & T) | (_ << 16)),
              (T = 65535 & (v = z)),
              (_ = v >>> 16),
              (R = 65535 & (w = k)),
              (C = w >>> 16),
              (w = e[6]),
              (_ += (v = t[6]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[6] = k = (65535 & R) | (C << 16)),
              (t[6] = z = (65535 & T) | (_ << 16)),
              (T = 65535 & (v = W)),
              (_ = v >>> 16),
              (R = 65535 & (w = K)),
              (C = w >>> 16),
              (w = e[7]),
              (_ += (v = t[7]) >>> 16),
              (R += 65535 & w),
              (C += w >>> 16),
              (C += (R += (_ += (T += 65535 & v) >>> 16) >>> 16) >>> 16),
              (e[7] = K = (65535 & R) | (C << 16)),
              (t[7] = W = (65535 & T) | (_ << 16)),
              (Y += 128),
              (n -= 128)
          }
          return n
        }
        function Z(e, t, r) {
          var n,
            i = new Int32Array(8),
            s = new Int32Array(8),
            a = new Uint8Array(256),
            o = r
          for (
            i[0] = 1779033703,
              i[1] = 3144134277,
              i[2] = 1013904242,
              i[3] = 2773480762,
              i[4] = 1359893119,
              i[5] = 2600822924,
              i[6] = 528734635,
              i[7] = 1541459225,
              s[0] = 4089235720,
              s[1] = 2227873595,
              s[2] = 4271175723,
              s[3] = 1595750129,
              s[4] = 2917565137,
              s[5] = 725511199,
              s[6] = 4215389547,
              s[7] = 327033209,
              J(i, s, t, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            a[n] = t[o - r + n]
          for (
            a[r] = 128,
              a[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0,
              d(a, r - 8, (o / 536870912) | 0, o << 3),
              J(i, s, a, r),
              n = 0;
            n < 8;
            n++
          )
            d(e, 8 * n, i[n], s[n])
          return 0
        }
        function Q(e, r) {
          var n = t(),
            i = t(),
            s = t(),
            a = t(),
            o = t(),
            u = t(),
            c = t(),
            f = t(),
            h = t()
          k(n, e[1], e[0]),
            k(h, r[1], r[0]),
            K(n, n, h),
            M(i, e[0], e[1]),
            M(h, r[0], r[1]),
            K(i, i, h),
            K(s, e[3], r[3]),
            K(s, s, l),
            K(a, e[2], r[2]),
            M(a, a, a),
            k(o, i, n),
            k(u, a, s),
            M(c, a, s),
            M(f, i, n),
            K(e[0], o, u),
            K(e[1], f, c),
            K(e[2], c, u),
            K(e[3], o, f)
        }
        function X(e, t, r) {
          var n
          for (n = 0; n < 4; n++) U(e[n], t[n], r)
        }
        function ee(e, r) {
          var n = t(),
            i = t(),
            s = t()
          F(s, r[2]), K(n, r[0], s), K(i, r[1], s), x(e, i), (e[31] ^= B(n) << 7)
        }
        function te(e, t, r) {
          var n, i
          for (P(e[0], a), P(e[1], o), P(e[2], o), P(e[3], a), i = 255; i >= 0; --i)
            X(e, t, (n = (r[(i / 8) | 0] >> (7 & i)) & 1)), Q(t, e), Q(e, e), X(e, t, n)
        }
        function re(e, r) {
          var n = [t(), t(), t(), t()]
          P(n[0], f), P(n[1], h), P(n[2], o), K(n[3], f, h), te(e, n, r)
        }
        function ne(e, r, i) {
          var s,
            a = new Uint8Array(64),
            o = [t(), t(), t(), t()]
          for (
            i || n(r, 32),
              Z(a, r, 32),
              a[0] &= 248,
              a[31] &= 127,
              a[31] |= 64,
              re(o, a),
              ee(e, o),
              s = 0;
            s < 32;
            s++
          )
            r[s + 32] = e[s]
          return 0
        }
        var ie = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ])
        function se(e, t) {
          var r, n, i, s
          for (n = 63; n >= 32; --n) {
            for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
              (t[i] += r - 16 * t[n] * ie[i - (n - 32)]),
                (r = Math.floor((t[i] + 128) / 256)),
                (t[i] -= 256 * r)
            ;(t[i] += r), (t[n] = 0)
          }
          for (r = 0, i = 0; i < 32; i++)
            (t[i] += r - (t[31] >> 4) * ie[i]), (r = t[i] >> 8), (t[i] &= 255)
          for (i = 0; i < 32; i++) t[i] -= r * ie[i]
          for (n = 0; n < 32; n++) (t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n])
        }
        function ae(e) {
          var t,
            r = new Float64Array(64)
          for (t = 0; t < 64; t++) r[t] = e[t]
          for (t = 0; t < 64; t++) e[t] = 0
          se(e, r)
        }
        function oe(e, r, n, i) {
          var s,
            a,
            o = new Uint8Array(64),
            u = new Uint8Array(64),
            c = new Uint8Array(64),
            l = new Float64Array(64),
            f = [t(), t(), t(), t()]
          Z(o, i, 32), (o[0] &= 248), (o[31] &= 127), (o[31] |= 64)
          var h = n + 64
          for (s = 0; s < n; s++) e[64 + s] = r[s]
          for (s = 0; s < 32; s++) e[32 + s] = o[32 + s]
          for (Z(c, e.subarray(32), n + 32), ae(c), re(f, c), ee(e, f), s = 32; s < 64; s++)
            e[s] = i[s]
          for (Z(u, e, n + 64), ae(u), s = 0; s < 64; s++) l[s] = 0
          for (s = 0; s < 32; s++) l[s] = c[s]
          for (s = 0; s < 32; s++) for (a = 0; a < 32; a++) l[s + a] += u[s] * o[a]
          return se(e.subarray(32), l), h
        }
        function ue(e, r, n, i) {
          var s,
            u = new Uint8Array(32),
            l = new Uint8Array(64),
            f = [t(), t(), t(), t()],
            h = [t(), t(), t(), t()]
          if (n < 64) return -1
          if (
            (function (e, r) {
              var n = t(),
                i = t(),
                s = t(),
                u = t(),
                l = t(),
                f = t(),
                h = t()
              return (
                P(e[2], o),
                L(e[1], r),
                j(s, e[1]),
                K(u, s, c),
                k(s, s, e[2]),
                M(u, e[2], u),
                j(l, u),
                j(f, l),
                K(h, f, l),
                K(n, h, s),
                K(n, n, u),
                V(n, n),
                K(n, n, s),
                K(n, n, u),
                K(n, n, u),
                K(e[0], n, u),
                j(i, e[0]),
                K(i, i, u),
                D(i, s) && K(e[0], e[0], p),
                j(i, e[0]),
                K(i, i, u),
                D(i, s) ? -1 : (B(e[0]) === r[31] >> 7 && k(e[0], a, e[0]), K(e[3], e[0], e[1]), 0)
              )
            })(h, i)
          )
            return -1
          for (s = 0; s < n; s++) e[s] = r[s]
          for (s = 0; s < 32; s++) e[s + 32] = i[s]
          if (
            (Z(l, e, n),
            ae(l),
            te(f, h, l),
            re(h, r.subarray(32)),
            Q(f, h),
            ee(u, f),
            (n -= 64),
            m(r, 0, u, 0))
          ) {
            for (s = 0; s < n; s++) e[s] = 0
            return -1
          }
          for (s = 0; s < n; s++) e[s] = r[s + 64]
          return n
        }
        function ce(e, t) {
          if (32 !== e.length) throw new Error('bad key size')
          if (24 !== t.length) throw new Error('bad nonce size')
        }
        function le() {
          for (var e = 0; e < arguments.length; e++)
            if (!(arguments[e] instanceof Uint8Array))
              throw new TypeError('unexpected type, use Uint8Array')
        }
        function fe(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0
        }
        ;(e.lowlevel = {
          crypto_core_hsalsa20: E,
          crypto_stream_xor: w,
          crypto_stream: I,
          crypto_stream_salsa20_xor: A,
          crypto_stream_salsa20: N,
          crypto_onetimeauth: T,
          crypto_onetimeauth_verify: _,
          crypto_verify_16: g,
          crypto_verify_32: m,
          crypto_secretbox: R,
          crypto_secretbox_open: C,
          crypto_scalarmult: $,
          crypto_scalarmult_base: G,
          crypto_box_beforenm: z,
          crypto_box_afternm: W,
          crypto_box: function (e, t, r, n, i, s) {
            var a = new Uint8Array(32)
            return z(a, i, s), W(e, t, r, n, a)
          },
          crypto_box_open: function (e, t, r, n, i, s) {
            var a = new Uint8Array(32)
            return z(a, i, s), Y(e, t, r, n, a)
          },
          crypto_box_keypair: q,
          crypto_hash: Z,
          crypto_sign: oe,
          crypto_sign_keypair: ne,
          crypto_sign_open: ue,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: 64,
          crypto_sign_PUBLICKEYBYTES: 32,
          crypto_sign_SECRETKEYBYTES: 64,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
          gf: t,
          D: c,
          L: ie,
          pack25519: x,
          unpack25519: L,
          M: K,
          A: M,
          S: j,
          Z: k,
          pow2523: V,
          add: Q,
          set25519: P,
          modL: se,
          scalarmult: te,
          scalarbase: re,
        }),
          (e.randomBytes = function (e) {
            var t = new Uint8Array(e)
            return n(t, e), t
          }),
          (e.secretbox = function (e, t, r) {
            le(e, t, r), ce(r, t)
            for (
              var n = new Uint8Array(32 + e.length), i = new Uint8Array(n.length), s = 0;
              s < e.length;
              s++
            )
              n[s + 32] = e[s]
            return R(i, n, n.length, t, r), i.subarray(16)
          }),
          (e.secretbox.open = function (e, t, r) {
            le(e, t, r), ce(r, t)
            for (
              var n = new Uint8Array(16 + e.length), i = new Uint8Array(n.length), s = 0;
              s < e.length;
              s++
            )
              n[s + 16] = e[s]
            return n.length < 32 || 0 !== C(i, n, n.length, t, r) ? null : i.subarray(32)
          }),
          (e.secretbox.keyLength = 32),
          (e.secretbox.nonceLength = 24),
          (e.secretbox.overheadLength = 16),
          (e.scalarMult = function (e, t) {
            if ((le(e, t), 32 !== e.length)) throw new Error('bad n size')
            if (32 !== t.length) throw new Error('bad p size')
            var r = new Uint8Array(32)
            return $(r, e, t), r
          }),
          (e.scalarMult.base = function (e) {
            if ((le(e), 32 !== e.length)) throw new Error('bad n size')
            var t = new Uint8Array(32)
            return G(t, e), t
          }),
          (e.scalarMult.scalarLength = 32),
          (e.scalarMult.groupElementLength = 32),
          (e.box = function (t, r, n, i) {
            var s = e.box.before(n, i)
            return e.secretbox(t, r, s)
          }),
          (e.box.before = function (e, t) {
            le(e, t),
              (function (e, t) {
                if (32 !== e.length) throw new Error('bad public key size')
                if (32 !== t.length) throw new Error('bad secret key size')
              })(e, t)
            var r = new Uint8Array(32)
            return z(r, e, t), r
          }),
          (e.box.after = e.secretbox),
          (e.box.open = function (t, r, n, i) {
            var s = e.box.before(n, i)
            return e.secretbox.open(t, r, s)
          }),
          (e.box.open.after = e.secretbox.open),
          (e.box.keyPair = function () {
            var e = new Uint8Array(32),
              t = new Uint8Array(32)
            return q(e, t), { publicKey: e, secretKey: t }
          }),
          (e.box.keyPair.fromSecretKey = function (e) {
            if ((le(e), 32 !== e.length)) throw new Error('bad secret key size')
            var t = new Uint8Array(32)
            return G(t, e), { publicKey: t, secretKey: new Uint8Array(e) }
          }),
          (e.box.publicKeyLength = 32),
          (e.box.secretKeyLength = 32),
          (e.box.sharedKeyLength = 32),
          (e.box.nonceLength = 24),
          (e.box.overheadLength = e.secretbox.overheadLength),
          (e.sign = function (e, t) {
            if ((le(e, t), 64 !== t.length)) throw new Error('bad secret key size')
            var r = new Uint8Array(64 + e.length)
            return oe(r, e, e.length, t), r
          }),
          (e.sign.open = function (e, t) {
            if ((le(e, t), 32 !== t.length)) throw new Error('bad public key size')
            var r = new Uint8Array(e.length),
              n = ue(r, e, e.length, t)
            if (n < 0) return null
            for (var i = new Uint8Array(n), s = 0; s < i.length; s++) i[s] = r[s]
            return i
          }),
          (e.sign.detached = function (t, r) {
            for (var n = e.sign(t, r), i = new Uint8Array(64), s = 0; s < i.length; s++) i[s] = n[s]
            return i
          }),
          (e.sign.detached.verify = function (e, t, r) {
            if ((le(e, t, r), 64 !== t.length)) throw new Error('bad signature size')
            if (32 !== r.length) throw new Error('bad public key size')
            var n,
              i = new Uint8Array(64 + e.length),
              s = new Uint8Array(64 + e.length)
            for (n = 0; n < 64; n++) i[n] = t[n]
            for (n = 0; n < e.length; n++) i[n + 64] = e[n]
            return ue(s, i, i.length, r) >= 0
          }),
          (e.sign.keyPair = function () {
            var e = new Uint8Array(32),
              t = new Uint8Array(64)
            return ne(e, t), { publicKey: e, secretKey: t }
          }),
          (e.sign.keyPair.fromSecretKey = function (e) {
            if ((le(e), 64 !== e.length)) throw new Error('bad secret key size')
            for (var t = new Uint8Array(32), r = 0; r < t.length; r++) t[r] = e[32 + r]
            return { publicKey: t, secretKey: new Uint8Array(e) }
          }),
          (e.sign.keyPair.fromSeed = function (e) {
            if ((le(e), 32 !== e.length)) throw new Error('bad seed size')
            for (var t = new Uint8Array(32), r = new Uint8Array(64), n = 0; n < 32; n++) r[n] = e[n]
            return ne(t, r, !0), { publicKey: t, secretKey: r }
          }),
          (e.sign.publicKeyLength = 32),
          (e.sign.secretKeyLength = 64),
          (e.sign.seedLength = 32),
          (e.sign.signatureLength = 64),
          (e.hash = function (e) {
            le(e)
            var t = new Uint8Array(64)
            return Z(t, e, e.length), t
          }),
          (e.hash.hashLength = 64),
          (e.verify = function (e, t) {
            return (
              le(e, t),
              0 !== e.length &&
                0 !== t.length &&
                e.length === t.length &&
                0 === y(e, 0, t, 0, e.length)
            )
          }),
          (e.setPRNG = function (e) {
            n = e
          }),
          (function () {
            var t = 'undefined' != typeof self ? self.crypto || self.msCrypto : null
            if (t && t.getRandomValues) {
              e.setPRNG(function (e, r) {
                var n,
                  i = new Uint8Array(r)
                for (n = 0; n < r; n += 65536)
                  t.getRandomValues(i.subarray(n, n + Math.min(r - n, 65536)))
                for (n = 0; n < r; n++) e[n] = i[n]
                fe(i)
              })
            } else
              (t = r(0)) &&
                t.randomBytes &&
                e.setPRNG(function (e, r) {
                  var n,
                    i = t.randomBytes(r)
                  for (n = 0; n < r; n++) e[n] = i[n]
                  fe(i)
                })
          })()
      })(e.exports ? e.exports : (self.nacl = self.nacl || {}))
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(3)
      class i {
        static parse(e) {
          const t = [],
            r = e
              .toString('utf8')
              .split('\n')
              .map((e) => e.trim())
              .filter((e) => '' !== e && !e.startsWith('#'))
          for (; r.length > 0; ) t.push(s(r))
          if (0 === t.length) throw new Error('PEM: no block')
          return t
        }
        constructor(e, t) {
          ;(this.type = e), (this.body = t), (this.headers = Object.create(null))
        }
        get procType() {
          return this.getHeader('Proc-Type')
        }
        getHeader(e) {
          const t = this.headers[e]
          return null == t ? '' : t
        }
        setHeader(e, t) {
          if (e.includes(':'))
            throw new Error('pem: cannot encode a header key that contains a colon')
          if ('' === e || '' === t) throw new Error('pem: invalid header key or value')
          this.headers[e] = t
        }
        toString() {
          let e = '-----BEGIN ' + this.type + '-----\n'
          const t = Object.keys(this.headers)
          if (t.length > 0) {
            const r = this.procType
            '' !== r && (e += `Proc-Type: ${r}\n`), t.sort()
            for (const r of t) 'Proc-Type' !== r && (e += `${r}: ${this.headers[r]}\n`)
            e += '\n'
          }
          const r = this.body.toString('base64')
          let n = 0
          for (; n < r.length; ) (e += r.slice(n, n + 64) + '\n'), (n += 64)
          return (e += '-----END ' + this.type + '-----\n'), e
        }
        toBuffer() {
          return Buffer.from(this.toString(), 'utf8')
        }
        valueOf() {
          return this.body
        }
        toJSON() {
          return { type: this.type, body: this.body, headers: this.headers }
        }
        [n.inspect.custom](e, t) {
          return `<${this.constructor.name} ${n.inspect(this.toJSON(), t)}>`
        }
      }
      function s(e) {
        let t = e.shift()
        if (null == t || !t.startsWith('-----BEGIN ') || !t.endsWith('-----'))
          throw new Error('pem: invalid BEGIN line')
        const r = t.slice('-----BEGIN '.length, t.length - '-----'.length)
        if ('' === r) throw new Error('pem: invalid type')
        const n = []
        for (t = e.shift(); null != t && t.includes(': '); ) {
          const r = t.split(': ')
          if (2 !== r.length || '' === r[0] || '' === r[1])
            throw new Error('pem: invalid Header line')
          n.push(r), (t = e.shift())
        }
        let s = ''
        for (; null != t && !t.startsWith('-----END '); ) (s += t), (t = e.shift())
        if (null == t || t !== `-----END ${r}-----`) throw new Error('pem: invalid END line')
        const a = new i(r, Buffer.from(s, 'base64'))
        if ('' === s || a.body.toString('base64') !== s) throw new Error('pem: invalid base64 body')
        for (const e of n) a.setHeader(e[0], e[1])
        return a
      }
      t.PEM = i
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(3),
        i = r(11)
      var s, a
      !(function (e) {
        ;(e[(e.UNIVERSAL = 0)] = 'UNIVERSAL'),
          (e[(e.APPLICATION = 64)] = 'APPLICATION'),
          (e[(e.CONTEXT_SPECIFIC = 128)] = 'CONTEXT_SPECIFIC'),
          (e[(e.PRIVATE = 192)] = 'PRIVATE')
      })((s = t.Class || (t.Class = {}))),
        (function (e) {
          ;(e[(e.NONE = 0)] = 'NONE'),
            (e[(e.BOOLEAN = 1)] = 'BOOLEAN'),
            (e[(e.INTEGER = 2)] = 'INTEGER'),
            (e[(e.BITSTRING = 3)] = 'BITSTRING'),
            (e[(e.OCTETSTRING = 4)] = 'OCTETSTRING'),
            (e[(e.NULL = 5)] = 'NULL'),
            (e[(e.OID = 6)] = 'OID'),
            (e[(e.ENUMERATED = 10)] = 'ENUMERATED'),
            (e[(e.UTF8 = 12)] = 'UTF8'),
            (e[(e.SEQUENCE = 16)] = 'SEQUENCE'),
            (e[(e.SET = 17)] = 'SET'),
            (e[(e.NUMERICSTRING = 18)] = 'NUMERICSTRING'),
            (e[(e.PRINTABLESTRING = 19)] = 'PRINTABLESTRING'),
            (e[(e.T61STRING = 20)] = 'T61STRING'),
            (e[(e.IA5STRING = 22)] = 'IA5STRING'),
            (e[(e.UTCTIME = 23)] = 'UTCTIME'),
            (e[(e.GENERALIZEDTIME = 24)] = 'GENERALIZEDTIME'),
            (e[(e.GENERALSTRING = 27)] = 'GENERALSTRING')
        })((a = t.Tag || (t.Tag = {})))
      class o {
        constructor(e, t) {
          ;(this.buf = e), (this.bitLen = t)
        }
        at(e) {
          if (e < 0 || e >= this.bitLen || !Number.isInteger(e)) return 0
          const t = Math.floor(e / 8),
            r = 7 - (e % 8)
          return (this.buf[t] >> r) & 1
        }
        rightAlign() {
          const e = 8 - (this.bitLen % 8)
          if (8 === e || 0 === this.buf.length) return this.buf
          const t = Buffer.alloc(this.buf.length)
          t[0] = this.buf[0] >> e
          for (let r = 1; r < this.buf.length; r++)
            (t[r] = this.buf[r - 1] << (8 - e)), (t[r] |= this.buf[r] >> e)
          return t
        }
      }
      t.BitString = o
      class u {
        static Bool(e) {
          const t = new u(s.UNIVERSAL, a.BOOLEAN, Buffer.from([e ? 255 : 0]))
          return (t._value = e), t
        }
        static parseBool(e) {
          if (!(e instanceof Buffer) || 1 !== e.length)
            throw new Error('ASN1 syntax error: invalid boolean')
          switch (e[0]) {
            case 0:
              return !1
            case 255:
              return !0
            default:
              throw new Error('ASN1 syntax error: invalid boolean')
          }
        }
        static Integer(e) {
          if (e instanceof Buffer) {
            const t = new u(s.UNIVERSAL, a.INTEGER, e)
            return (t._value = e.toString('hex')), t
          }
          if (!Number.isSafeInteger(e)) throw new Error('ASN1 syntax error: invalid integer')
          let t
          if (e >= -128 && e < 128) (t = Buffer.alloc(1)), t.writeInt8(e, 0)
          else if (e >= -32768 && e < 32768) (t = Buffer.alloc(2)), t.writeIntBE(e, 0, 2)
          else if (e >= -8388608 && e < 8388608) (t = Buffer.alloc(3)), t.writeIntBE(e, 0, 3)
          else if (e >= -2147483648 && e < 2147483648) (t = Buffer.alloc(4)), t.writeIntBE(e, 0, 4)
          else if (e >= -549755813888 && e < 549755813888)
            (t = Buffer.alloc(5)), t.writeIntBE(e, 0, 5)
          else {
            if (!(e >= -0x800000000000 && e < 0x800000000000))
              throw new Error('ASN1 syntax error: invalid Integer')
            ;(t = Buffer.alloc(6)), t.writeIntBE(e, 0, 6)
          }
          const r = new u(s.UNIVERSAL, a.INTEGER, t)
          return (r._value = e), r
        }
        static parseInteger(e) {
          if (!(e instanceof Buffer) || 0 === e.length)
            throw new Error('ASN1 syntax error: invalid Integer')
          return e.length > 6 ? e.toString('hex') : e.readIntBE(0, e.length)
        }
        static parseIntegerNum(e) {
          const t = u.parseInteger(e)
          if ('number' != typeof t) throw new Error('ASN1 syntax error: invalid Integer number')
          return t
        }
        static parseIntegerStr(e) {
          const t = u.parseInteger(e)
          return 'number' == typeof t ? t.toString(16) : t
        }
        static BitString(e) {
          e instanceof Buffer && (e = new o(e, 8 * e.length))
          const t = 8 * e.buf.length - e.bitLen,
            r = Buffer.alloc(e.buf.length + 1)
          return r.writeInt8(t, 0), e.buf.copy(r, 1), new u(s.UNIVERSAL, a.BITSTRING, r)
        }
        static parseBitString(e) {
          if (!(e instanceof Buffer) || 0 === e.length)
            throw new Error('ASN1 syntax error: invalid BitString')
          const t = e[0]
          if (t > 7 || (1 === e.length && t > 0) || 0 != (e[e.length - 1] & ((1 << e[0]) - 1)))
            throw new Error('ASN1 syntax error: invalid padding bits in BIT STRING')
          return new o(e.slice(1), 8 * (e.length - 1) - t)
        }
        static Null() {
          const e = new u(s.UNIVERSAL, a.NULL, Buffer.alloc(0))
          return (e._value = null), e
        }
        static parseNull(e) {
          if (!(e instanceof Buffer) || 0 !== e.length)
            throw new Error('ASN1 syntax error: invalid null')
          return null
        }
        static OID(e) {
          const t = e.split('.')
          if (0 === t.length) throw new Error('ASN1 syntax error: invalid Object Identifier')
          const r = []
          r.push(40 * f(t[0]) + f(t[1]))
          const n = []
          for (let e = 2; e < t.length; ++e) {
            let i = f(t[e])
            for (n.length = 0, n.push(127 & i); i > 127; ) (i >>>= 7), n.unshift((127 & i) | 128)
            r.push(...n)
          }
          const i = new u(s.UNIVERSAL, a.OID, Buffer.from(r))
          return (i._value = e), i
        }
        static parseOID(e) {
          if (!(e instanceof Buffer) || 0 === e.length)
            throw new Error('ASN1 syntax error: invalid OID')
          let t = Math.floor(e[0] / 40) + '.' + (e[0] % 40),
            r = 0
          for (let n = 1; n < e.length; n++)
            e[n] >= 128 ? ((r += 127 & e[n]), (r <<= 7)) : ((t += '.' + (r + e[n])), (r = 0))
          return t
        }
        static UTF8(e) {
          const t = new u(s.UNIVERSAL, a.UTF8, Buffer.from(e, 'utf8'))
          return (t._value = e), t
        }
        static parseUTF8(e) {
          if (!(e instanceof Buffer)) throw new Error('parse ASN1 error: invalid Buffer')
          return e.toString('utf8')
        }
        static NumericString(e) {
          if (!c(e)) throw new Error('ASN1 syntax error: invalid NumericString')
          const t = new u(s.UNIVERSAL, a.NUMERICSTRING, Buffer.from(e, 'utf8'))
          return (t._value = e), t
        }
        static parseNumericString(e) {
          if (!(e instanceof Buffer)) throw new Error('parse ASN1 error: invalid Buffer')
          const t = e.toString('utf8')
          if (!c(t)) throw new Error('ASN1 syntax error: invalid NumericString')
          return t
        }
        static PrintableString(e) {
          const t = new u(s.UNIVERSAL, a.PRINTABLESTRING, Buffer.from(e, 'utf8'))
          return (t._value = e), t
        }
        static parsePrintableString(e) {
          if (!(e instanceof Buffer)) throw new Error('parse ASN1 error: invalid Buffer')
          return e.toString('utf8')
        }
        static IA5String(e) {
          if (!l(e)) throw new Error('ASN1 syntax error: invalid IA5String')
          const t = new u(s.UNIVERSAL, a.IA5STRING, Buffer.from(e, 'utf8'))
          return (t._value = e), t
        }
        static parseIA5String(e) {
          if (!(e instanceof Buffer)) throw new Error('parse ASN1 error: invalid Buffer')
          const t = e.toString('utf8')
          if (!l(t)) throw new Error('ASN1 syntax error: invalid IA5String')
          return t
        }
        static T61String(e) {
          const t = new u(s.UNIVERSAL, a.T61STRING, Buffer.from(e, 'utf8'))
          return (t._value = e), t
        }
        static parseT61String(e) {
          if (!(e instanceof Buffer)) throw new Error('parse ASN1 error: invalid Buffer')
          return e.toString('utf8')
        }
        static GeneralString(e) {
          const t = new u(s.UNIVERSAL, a.GENERALSTRING, Buffer.from(e, 'utf8'))
          return (t._value = e), t
        }
        static parseGeneralString(e) {
          if (!(e instanceof Buffer)) throw new Error('parse ASN1 error: invalid Buffer')
          return e.toString('utf8')
        }
        static UTCTime(e) {
          let t = ''
          const r = []
          r.push(('' + e.getUTCFullYear()).substr(2)),
            r.push('' + (e.getUTCMonth() + 1)),
            r.push('' + e.getUTCDate()),
            r.push('' + e.getUTCHours()),
            r.push('' + e.getUTCMinutes()),
            r.push('' + e.getUTCSeconds())
          for (const e of r) e.length < 2 && (t += '0'), (t += e)
          t += 'Z'
          const n = new u(s.UNIVERSAL, a.UTCTIME, Buffer.from(t, 'utf8'))
          return (n._value = e), n
        }
        static parseUTCTime(e) {
          if (!(e instanceof Buffer) || 0 === e.length)
            throw new Error('ASN1 syntax error: invalid UTC Time')
          const t = e.toString('utf8'),
            r = new Date()
          let n = f(t.substr(0, 2))
          n = n >= 50 ? 1900 + n : 2e3 + n
          const i = f(t.substr(2, 2)) - 1,
            s = f(t.substr(4, 2)),
            a = f(t.substr(6, 2)),
            o = f(t.substr(8, 2))
          let u = 0,
            c = 0,
            l = ''
          if (
            (t.length > 11 &&
              ((c = 10),
              (l = t.charAt(c)),
              '+' !== l && '-' !== l && ((u = f(t.substr(10, 2))), (c += 2))),
            r.setUTCFullYear(n, i, s),
            r.setUTCHours(a, o, u, 0),
            c > 0 && ((l = t.charAt(c)), '+' === l || '-' === l))
          ) {
            let e = 60 * f(t.substr(c + 1, 2)) + f(t.substr(c + 4, 2))
            ;(e *= 6e4), '+' === l ? r.setTime(+r - e) : r.setTime(+r + e)
          }
          return r
        }
        static GeneralizedTime(e) {
          let t = ''
          const r = []
          r.push('' + e.getUTCFullYear()),
            r.push('' + (e.getUTCMonth() + 1)),
            r.push('' + e.getUTCDate()),
            r.push('' + e.getUTCHours()),
            r.push('' + e.getUTCMinutes()),
            r.push('' + e.getUTCSeconds())
          for (const e of r) e.length < 2 && (t += '0'), (t += e)
          t += 'Z'
          const n = new u(s.UNIVERSAL, a.GENERALIZEDTIME, Buffer.from(t, 'utf8'))
          return (n._value = e), n
        }
        static parseGeneralizedTime(e) {
          if (!(e instanceof Buffer) || 0 === e.length)
            throw new Error('ASN1 syntax error: invalid Generalized Time')
          const t = e.toString('utf8'),
            r = new Date(),
            n = f(t.substr(0, 4)),
            i = f(t.substr(4, 2)) - 1,
            s = f(t.substr(6, 2)),
            a = f(t.substr(8, 2)),
            o = f(t.substr(10, 2)),
            u = f(t.substr(12, 2))
          let c = 0,
            l = 0,
            h = !1
          'Z' === t.charAt(t.length - 1) && (h = !0)
          const p = t.length - 5,
            d = t.charAt(p)
          if ('+' === d || '-' === d) {
            ;(l = 60 * f(t.substr(p + 1, 2)) + f(t.substr(p + 4, 2))),
              (l *= 6e4),
              '+' === d && (l *= -1),
              (h = !0)
          }
          return (
            '.' === t.charAt(14) && (c = 1e3 * parseFloat(t.substr(14))),
            h
              ? (r.setUTCFullYear(n, i, s), r.setUTCHours(a, o, u, c), r.setTime(+r + l))
              : (r.setFullYear(n, i, s), r.setHours(a, o, u, c)),
            r
          )
        }
        static parseTime(e, t) {
          switch (e) {
            case a.UTCTIME:
              return u.parseUTCTime(t)
            case a.GENERALIZEDTIME:
              return u.parseGeneralizedTime(t)
            default:
              throw new Error('Invalid ASN1 time tag')
          }
        }
        static Set(e) {
          const t = new u(s.UNIVERSAL, a.SET, Buffer.concat(e.map((e) => e.toDER())))
          return (t._value = e), t
        }
        static Seq(e) {
          const t = new u(s.UNIVERSAL, a.SEQUENCE, Buffer.concat(e.map((e) => e.toDER())))
          return (t._value = e), t
        }
        static Spec(e, t, r = !0) {
          const n = Array.isArray(t) ? Buffer.concat(t.map((e) => e.toDER())) : t.toDER()
          Array.isArray(t) && (r = !0)
          const i = new u(s.CONTEXT_SPECIFIC, e, n, r)
          return (i._value = t), i
        }
        static fromDER(e, t = !1) {
          return u._fromDER(new i.BufferVisitor(e), t)
        }
        static parseDER(e, t, r) {
          const n = u._fromDER(new i.BufferVisitor(e), !1)
          if (n.class !== t && n.tag !== r)
            throw new Error(`invalid ASN.1 DER for class ${t} and tag ${r}`)
          return n
        }
        static parseDERWithTemplate(e, t) {
          const r = u._fromDER(new i.BufferVisitor(e), !0),
            n = {},
            s = r.validate(t, n)
          if (null != s) throw ((s.data = r), s)
          return n
        }
        static _parseCompound(e, t) {
          const r = [],
            n = e.length,
            s = new i.BufferVisitor(e)
          let a = 0
          for (; a < n; ) {
            const e = s.end
            r.push(u._fromDER(s, t)), (a += s.end - e)
          }
          return r
        }
        static _fromDER(e, t) {
          if (!(e.buf instanceof Buffer) || 0 === e.length)
            throw new Error('ASN1 syntax error: invalid Generalized Time')
          e.mustWalk(1, 'Too few bytes to read ASN.1 tag.')
          const r = e.start,
            n = e.buf[r],
            i = 192 & n,
            s = 31 & n,
            o = (function (e) {
              e.mustWalk(1, 'Too few bytes to read ASN.1 value length.')
              const t = e.buf[e.start]
              if (0 == (128 & t)) return t
              const r = 127 & t
              return (
                e.mustWalk(r, 'Too few bytes to read ASN.1 value length.'),
                e.buf.readUIntBE(e.start, r)
              )
            })(e)
          if ((e.mustHas(o), 0 !== o && s === a.NULL))
            throw new Error('invalid value length or NULL tag.')
          e.mustWalk(o)
          const c = 32 == (32 & n),
            l = new u(i, s, e.buf.slice(e.start, e.end), c)
          return (
            c && t && (l._value = u._parseCompound(l.bytes, t)), (l._der = e.buf.slice(r, e.end)), l
          )
        }
        constructor(e, t, r, n = !1) {
          ;(this.class = e),
            (this.tag = t),
            (this.bytes = r),
            (this.isCompound = n || t === a.SEQUENCE || t === a.SET),
            (this._value = void 0),
            (this._der = null)
        }
        get value() {
          return void 0 === this._value && (this._value = this.valueOf()), this._value
        }
        get DER() {
          return null == this._der && (this._der = this.toDER()), this._der
        }
        mustCompound(e = 'asn1 object value is not compound') {
          if (!this.isCompound || !Array.isArray(this.value)) {
            const t = new Error(e)
            throw ((t.data = this.toJSON()), t)
          }
          return this.value
        }
        equals(e) {
          return (
            e instanceof u &&
            this.class === e.class &&
            this.tag === e.tag &&
            this.isCompound === e.isCompound &&
            !!this.bytes.equals(e.bytes)
          )
        }
        toDER() {
          let e = this.class | this.tag
          this.isCompound && (e |= 32)
          const t = (function (e) {
              if (e <= 127) return 0
              if (e <= 255) return 1
              if (e <= 65535) return 2
              if (e <= 16777215) return 3
              if (e <= 4294967295) return 4
              if (e <= 0xffffffffff) return 5
              if (e <= 0xffffffffffff) return 6
              throw new Error('invalid value length')
            })(this.bytes.length),
            r = Buffer.allocUnsafe(2 + t + this.bytes.length)
          return (
            r.writeInt8(e, 0),
            0 === t
              ? (r.writeUInt8(this.bytes.length, 1), this.bytes.copy(r, 2))
              : (r.writeUInt8(128 | t, 1),
                r.writeUIntBE(this.bytes.length, 2, t),
                this.bytes.copy(r, 2 + t)),
            r
          )
        }
        valueOf() {
          if (this.isCompound) return u._parseCompound(this.bytes, !1)
          if (this.class !== s.UNIVERSAL) return this.bytes
          switch (this.tag) {
            case a.BOOLEAN:
              return u.parseBool(this.bytes)
            case a.INTEGER:
              return u.parseInteger(this.bytes)
            case a.BITSTRING:
              return u.parseBitString(this.bytes)
            case a.NULL:
              return u.parseNull(this.bytes)
            case a.OID:
              return u.parseOID(this.bytes)
            case a.UTF8:
              return u.parseUTF8(this.bytes)
            case a.NUMERICSTRING:
              return u.parseNumericString(this.bytes)
            case a.PRINTABLESTRING:
              return u.parsePrintableString(this.bytes)
            case a.T61STRING:
              return u.parseT61String(this.bytes)
            case a.IA5STRING:
              return u.parseIA5String(this.bytes)
            case a.GENERALSTRING:
              return u.parseGeneralString(this.bytes)
            case a.UTCTIME:
              return u.parseUTCTime(this.bytes)
            case a.GENERALIZEDTIME:
              return u.parseGeneralizedTime(this.bytes)
            default:
              return this.bytes
          }
        }
        validate(e, t = {}) {
          if (this.class !== e.class)
            return new Error(
              `ASN.1 object validate failure for ${e.name} : error class ${s[this.class]}`
            )
          if (!(Array.isArray(e.tag) ? e.tag : [e.tag]).includes(this.tag))
            return new Error(
              `ASN.1 object validate failure for ${e.name}: error tag ${a[this.tag]}`
            )
          if ((null != e.capture && (t[e.capture] = this), Array.isArray(e.value))) {
            const r = this.mustCompound(e.name + ' need compound ASN1 value')
            for (let n = 0, i = 0; n < e.value.length; n++)
              if (null != r[i]) {
                const s = r[i].validate(e.value[n], t)
                if (null == s) i++
                else if (!0 !== e.value[n].optional) return s
              } else if (!0 !== e.value[n].optional)
                return new Error(`ASN.1 object validate failure for ${e.value[n].name}: not exists`)
          } else if (null != e.value) {
            const r = this.tag === a.BITSTRING ? this.bytes.slice(1) : this.bytes
            return u.fromDER(r).validate(e.value, t)
          }
          return null
        }
        toJSON() {
          let e = this.value
          return (
            Array.isArray(e) && (e = e.map((e) => e.toJSON())),
            {
              class: s[this.class],
              tag: this.class === s.UNIVERSAL ? a[this.tag] : this.tag,
              value: e,
            }
          )
        }
        [n.inspect.custom](e, t) {
          return (
            t.depth <= 2 && (t.depth = 10),
            `<${this.constructor.name} ${n.inspect(this.toJSON(), t)}>`
          )
        }
      }
      function c(e) {
        for (const t of e) {
          const e = t.charCodeAt(0)
          if (32 !== e && (e < 48 || e > 57)) return !1
        }
        return !0
      }
      function l(e) {
        for (const t of e) if (t.charCodeAt(0) >= 128) return !1
        return !0
      }
      function f(e, t = 10) {
        const r = parseInt(e, t)
        if (Number.isNaN(r)) throw new Error(`Invalid numeric string "${e}" in radix ${t}.`)
        return r
      }
      t.ASN1 = u
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const n = r(3),
        i = r(0),
        s = r(10),
        a = r(4),
        o = r(9),
        u = Object.create(null)
      ;(u.CN = a.getOID('commonName')),
        (u.commonName = 'CN'),
        (u.C = a.getOID('countryName')),
        (u.countryName = 'C'),
        (u.L = a.getOID('localityName')),
        (u.localityName = 'L'),
        (u.ST = a.getOID('stateOrProvinceName')),
        (u.stateOrProvinceName = 'ST'),
        (u.O = a.getOID('organizationName')),
        (u.organizationName = 'O'),
        (u.OU = a.getOID('organizationalUnitName')),
        (u.organizationalUnitName = 'OU'),
        (u.E = a.getOID('emailAddress')),
        (u.emailAddress = 'E')
      const c = {
        name: 'Certificate',
        class: s.Class.UNIVERSAL,
        tag: s.Tag.SEQUENCE,
        value: [
          {
            name: 'Certificate.TBSCertificate',
            class: s.Class.UNIVERSAL,
            tag: s.Tag.SEQUENCE,
            capture: 'tbsCertificate',
            value: [
              {
                name: 'Certificate.TBSCertificate.version',
                class: s.Class.CONTEXT_SPECIFIC,
                tag: s.Tag.NONE,
                optional: !0,
                value: [
                  {
                    name: 'Certificate.TBSCertificate.version.integer',
                    class: s.Class.UNIVERSAL,
                    tag: s.Tag.INTEGER,
                    capture: 'certVersion',
                  },
                ],
              },
              {
                name: 'Certificate.TBSCertificate.serialNumber',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.INTEGER,
                capture: 'certSerialNumber',
              },
              {
                name: 'Certificate.TBSCertificate.signature',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.SEQUENCE,
                value: [
                  {
                    name: 'Certificate.TBSCertificate.signature.algorithm',
                    class: s.Class.UNIVERSAL,
                    tag: s.Tag.OID,
                    capture: 'certinfoSignatureOID',
                  },
                  {
                    name: 'Certificate.TBSCertificate.signature.parameters',
                    class: s.Class.UNIVERSAL,
                    tag: s.Tag.OCTETSTRING,
                    optional: !0,
                    capture: 'certinfoSignatureParams',
                  },
                ],
              },
              {
                name: 'Certificate.TBSCertificate.issuer',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.SEQUENCE,
                capture: 'certIssuer',
              },
              {
                name: 'Certificate.TBSCertificate.validity',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.SEQUENCE,
                value: [
                  {
                    name: 'Certificate.TBSCertificate.validity.notBefore',
                    class: s.Class.UNIVERSAL,
                    tag: [s.Tag.UTCTIME, s.Tag.GENERALIZEDTIME],
                    capture: 'certValidityNotBefore',
                  },
                  {
                    name: 'Certificate.TBSCertificate.validity.notAfter',
                    class: s.Class.UNIVERSAL,
                    tag: [s.Tag.UTCTIME, s.Tag.GENERALIZEDTIME],
                    capture: 'certValidityNotAfter',
                  },
                ],
              },
              {
                name: 'Certificate.TBSCertificate.subject',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.SEQUENCE,
                capture: 'certSubject',
              },
              o.publicKeyValidator,
              {
                name: 'Certificate.TBSCertificate.issuerUniqueID',
                class: s.Class.CONTEXT_SPECIFIC,
                tag: s.Tag.BOOLEAN,
                optional: !0,
                value: [
                  {
                    name: 'Certificate.TBSCertificate.issuerUniqueID.id',
                    class: s.Class.UNIVERSAL,
                    tag: s.Tag.BITSTRING,
                    capture: 'certIssuerUniqueId',
                  },
                ],
              },
              {
                name: 'Certificate.TBSCertificate.subjectUniqueID',
                class: s.Class.CONTEXT_SPECIFIC,
                tag: s.Tag.INTEGER,
                optional: !0,
                value: [
                  {
                    name: 'Certificate.TBSCertificate.subjectUniqueID.id',
                    class: s.Class.UNIVERSAL,
                    tag: s.Tag.BITSTRING,
                    capture: 'certSubjectUniqueId',
                  },
                ],
              },
              {
                name: 'Certificate.TBSCertificate.extensions',
                class: s.Class.CONTEXT_SPECIFIC,
                tag: s.Tag.BITSTRING,
                capture: 'certExtensions',
                optional: !0,
              },
            ],
          },
          {
            name: 'Certificate.signatureAlgorithm',
            class: s.Class.UNIVERSAL,
            tag: s.Tag.SEQUENCE,
            value: [
              {
                name: 'Certificate.signatureAlgorithm.algorithm',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.OID,
                capture: 'certSignatureOID',
              },
              {
                name: 'Certificate.TBSCertificate.signature.parameters',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.OCTETSTRING,
                optional: !0,
                capture: 'certSignatureParams',
              },
            ],
          },
          {
            name: 'Certificate.signatureValue',
            class: s.Class.UNIVERSAL,
            tag: s.Tag.BITSTRING,
            capture: 'certSignature',
          },
        ],
      }
      class l {
        constructor() {
          ;(this.attributes = []), (this.uniqueId = null)
        }
        get commonName() {
          return this.getFieldValue('commonName')
        }
        get organizationName() {
          return this.getFieldValue('organizationName')
        }
        get organizationalUnitName() {
          return this.getFieldValue('organizationalUnitName')
        }
        get countryName() {
          return this.getFieldValue('countryName')
        }
        get localityName() {
          return this.getFieldValue('localityName')
        }
        get serialName() {
          return this.getFieldValue('serialName')
        }
        getHash() {
          const e = i.createHash('sha1')
          for (const t of this.attributes) e.update(t.oid), e.update(t.value)
          return e.digest()
        }
        getField(e) {
          for (const t of this.attributes)
            if (e === t.oid || e === t.name || e === t.shortName) return t
          return null
        }
        addField(e) {
          m([e]), this.attributes.push(e)
        }
        setAttrs(e) {
          m(e), (this.attributes = e)
        }
        toJSON() {
          const e = {}
          for (const t of this.attributes) {
            const r = t.shortName
            'string' == typeof r && '' !== r && (e[r] = t.value)
          }
          return (e.uniqueId = this.uniqueId), (e.attributes = this.attributes), e
        }
        getFieldValue(e) {
          const t = this.getField(e)
          return null != t ? t.value : ''
        }
      }
      t.DistinguishedName = l
      class f {
        static fromPEMs(e) {
          const t = [],
            r = s.PEM.parse(e)
          for (const e of r) {
            if (
              'CERTIFICATE' !== e.type &&
              'X509 CERTIFICATE' !== e.type &&
              'TRUSTED CERTIFICATE' !== e.type
            )
              throw new Error('Could not convert certificate from PEM: invalid type')
            if (e.procType.includes('ENCRYPTED'))
              throw new Error('Could not convert certificate from PEM: PEM is encrypted.')
            const r = s.ASN1.fromDER(e.body)
            t.push(new f(r))
          }
          if (0 === t.length) throw new Error('No Certificate')
          return t
        }
        static fromPEM(e) {
          return f.fromPEMs(e)[0]
        }
        constructor(e) {
          const t = Object.create(null),
            r = e.validate(c, t)
          if (null != r) throw new Error('Cannot read X.509 certificate: ' + r.message)
          if (
            ((this.raw = e.DER),
            (this.version =
              null == t.certVersion ? 0 : s.ASN1.parseIntegerNum(t.certVersion.bytes) + 1),
            (this.serialNumber = s.ASN1.parseIntegerStr(t.certSerialNumber.bytes)),
            (this.signatureOID = s.ASN1.parseOID(t.certSignatureOID.bytes)),
            (this.signatureAlgorithm = a.getOIDName(this.signatureOID)),
            (this.infoSignatureOID = s.ASN1.parseOID(t.certinfoSignatureOID.bytes)),
            (this.signature = s.ASN1.parseBitString(t.certSignature.bytes).buf),
            (this.validFrom = s.ASN1.parseTime(
              t.certValidityNotBefore.tag,
              t.certValidityNotBefore.bytes
            )),
            (this.validTo = s.ASN1.parseTime(
              t.certValidityNotAfter.tag,
              t.certValidityNotAfter.bytes
            )),
            (this.issuer = new l()),
            this.issuer.setAttrs(b(t.certIssuer)),
            null != t.certIssuerUniqueId &&
              (this.issuer.uniqueId = s.ASN1.parseBitString(t.certIssuerUniqueId.bytes)),
            (this.subject = new l()),
            this.subject.setAttrs(b(t.certSubject)),
            null != t.certSubjectUniqueId &&
              (this.subject.uniqueId = s.ASN1.parseBitString(t.certSubjectUniqueId.bytes)),
            (this.extensions = []),
            (this.subjectKeyIdentifier = ''),
            (this.authorityKeyIdentifier = ''),
            (this.ocspServer = ''),
            (this.issuingCertificateURL = ''),
            (this.isCA = !1),
            (this.maxPathLen = -1),
            (this.basicConstraintsValid = !1),
            (this.keyUsage = 0),
            (this.dnsNames = []),
            (this.emailAddresses = []),
            (this.ipAddresses = []),
            (this.uris = []),
            null != t.certExtensions)
          ) {
            this.extensions = (function (e) {
              const t = []
              for (const r of e.mustCompound()) for (const e of r.mustCompound()) t.push(h(e))
              return t
            })(t.certExtensions)
            for (const e of this.extensions)
              if (
                ('string' == typeof e.subjectKeyIdentifier &&
                  (this.subjectKeyIdentifier = e.subjectKeyIdentifier),
                'string' == typeof e.authorityKeyIdentifier &&
                  (this.authorityKeyIdentifier = e.authorityKeyIdentifier),
                'string' == typeof e.authorityInfoAccessOcsp &&
                  (this.ocspServer = e.authorityInfoAccessOcsp),
                'string' == typeof e.authorityInfoAccessIssuers &&
                  (this.issuingCertificateURL = e.authorityInfoAccessIssuers),
                'boolean' == typeof e.basicConstraintsValid &&
                  ((this.isCA = e.isCA),
                  (this.maxPathLen = e.maxPathLen),
                  (this.basicConstraintsValid = e.basicConstraintsValid)),
                'number' == typeof e.keyUsage && (this.keyUsage = e.keyUsage),
                Array.isArray(e.altNames))
              )
                for (const t of e.altNames)
                  null != t.dnsName && this.dnsNames.push(t.dnsName),
                    null != t.email && this.emailAddresses.push(t.email),
                    null != t.ip && this.ipAddresses.push(t.ip),
                    null != t.uri && this.uris.push(t.uri)
          }
          ;(this.publicKey = new o.PublicKey(t.publicKeyInfo)),
            (this.publicKeyRaw = this.publicKey.toDER()),
            (this.tbsCertificate = t.tbsCertificate)
        }
        getExtension(e, t = '') {
          for (const r of this.extensions)
            if (e === r.oid || e === r.name) return '' === t ? r : r[t]
          return null
        }
        checkSignature(e) {
          if (
            (3 === this.version && !this.basicConstraintsValid) ||
            (this.basicConstraintsValid && !this.isCA)
          )
            return new Error('The parent constraint violation error')
          if (!0 !== this.getExtension('keyUsage', 'keyCertSign'))
            return new Error('The parent constraint violation error')
          if (!e.isIssuer(this))
            return new Error('The parent certificate did not issue the given child certificate')
          const t = (function (e) {
            switch (a.getOIDName(e)) {
              case 'sha1WithRsaEncryption':
                return 'sha1'
              case 'md5WithRsaEncryption':
                return 'md5'
              case 'sha256WithRsaEncryption':
                return 'sha256'
              case 'sha384WithRsaEncryption':
                return 'sha384'
              case 'sha512WithRsaEncryption':
                return 'sha512'
              case 'RSASSA-PSS':
                return 'sha256'
              case 'ecdsaWithSha1':
                return 'sha1'
              case 'ecdsaWithSha256':
                return 'sha256'
              case 'ecdsaWithSha384':
                return 'sha384'
              case 'ecdsaWithSha512':
                return 'sha512'
              case 'dsaWithSha1':
                return 'sha1'
              case 'dsaWithSha256':
                return 'sha256'
              default:
                return ''
            }
          })(e.signatureOID)
          if ('' === t) return new Error('Unknown child signature OID.')
          return !1 === this.publicKey.verify(e.tbsCertificate.DER, e.signature, t)
            ? new Error('Child signature not matched')
            : null
        }
        isIssuer(e) {
          return this.issuer.getHash().equals(e.subject.getHash())
        }
        verifySubjectKeyIdentifier() {
          return (
            this.publicKey.getFingerprint('sha1', 'PublicKey').toString('hex') ===
            this.subjectKeyIdentifier
          )
        }
        toJSON() {
          const e = {}
          for (const t of Object.keys(this)) e[t] = E(this[t])
          return delete e.tbsCertificate, e
        }
        [n.inspect.custom](e, t) {
          return (
            t.depth <= 2 && (t.depth = 10),
            `<${this.constructor.name} ${n.inspect(this.toJSON(), t)}>`
          )
        }
      }
      function h(e) {
        const t = {}
        switch (
          ((t.oid = s.ASN1.parseOID(e.value[0].bytes)),
          (t.critical = !1),
          e.value[1].tag === s.Tag.BOOLEAN
            ? ((t.critical = s.ASN1.parseBool(e.value[1].bytes)), (t.value = e.value[2].bytes))
            : (t.value = e.value[1].bytes),
          (t.name = a.getOIDName(t.oid)),
          t.name)
        ) {
          case 'keyUsage':
            !(function (e) {
              const t = s.ASN1.parseBitString(s.ASN1.fromDER(e.value).bytes)
              let r = 0,
                n = 0
              e.keyUsage = 0
              for (let r = 0; r < 9; r++) 0 !== t.at(r) && (e.keyUsage |= 1 << r)
              t.buf.length > 0 && ((r = t.buf[0]), (n = t.buf.length > 1 ? t.buf[1] : 0))
              ;(e.digitalSignature = 128 == (128 & r)),
                (e.nonRepudiation = 64 == (64 & r)),
                (e.keyEncipherment = 32 == (32 & r)),
                (e.dataEncipherment = 16 == (16 & r)),
                (e.keyAgreement = 8 == (8 & r)),
                (e.keyCertSign = 4 == (4 & r)),
                (e.cRLSign = 2 == (2 & r)),
                (e.encipherOnly = 1 == (1 & r)),
                (e.decipherOnly = 128 == (128 & n))
            })(t)
            break
          case 'basicConstraints':
            !(function (e) {
              const t = s.ASN1.fromDER(e.value).mustCompound()
              t.length > 0 && t[0].tag === s.Tag.BOOLEAN
                ? (e.isCA = s.ASN1.parseBool(t[0].bytes))
                : (e.isCA = !1)
              let r = null
              t.length > 0 && t[0].tag === s.Tag.INTEGER
                ? (r = t[0].bytes)
                : t.length > 1 && (r = t[1].bytes)
              e.maxPathLen = null !== r ? s.ASN1.parseInteger(r) : -1
              e.basicConstraintsValid = !0
            })(t)
            break
          case 'extKeyUsage':
            !(function (e) {
              const t = s.ASN1.fromDER(e.value).mustCompound()
              for (const r of t) e[a.getOIDName(s.ASN1.parseOID(r.bytes))] = !0
            })(t)
            break
          case 'nsCertType':
            !(function (e) {
              const t = s.ASN1.parseBitString(s.ASN1.fromDER(e.value).bytes)
              let r = 0
              t.buf.length > 0 && (r = t.buf[0])
              ;(e.client = 128 == (128 & r)),
                (e.server = 64 == (64 & r)),
                (e.email = 32 == (32 & r)),
                (e.objsign = 16 == (16 & r)),
                (e.reserved = 8 == (8 & r)),
                (e.sslCA = 4 == (4 & r)),
                (e.emailCA = 2 == (2 & r)),
                (e.objCA = 1 == (1 & r))
            })(t)
            break
          case 'subjectAltName':
          case 'issuerAltName':
            p(t)
            break
          case 'subjectKeyIdentifier':
            !(function (e) {
              const t = s.ASN1.parseDERWithTemplate(e.value, d)
              e.subjectKeyIdentifier = t.subjectKeyIdentifier.bytes.toString('hex')
            })(t)
            break
          case 'authorityKeyIdentifier':
            !(function (e) {
              const t = s.ASN1.parseDERWithTemplate(e.value, y)
              e.authorityKeyIdentifier = t.authorityKeyIdentifier.bytes.toString('hex')
            })(t)
            break
          case 'authorityInfoAccess':
            !(function (e) {
              const t = s.ASN1.parseDERWithTemplate(e.value, g)
              null != t.authorityInfoAccessOcsp &&
                (e.authorityInfoAccessOcsp = t.authorityInfoAccessOcsp.bytes.toString())
              null != t.authorityInfoAccessIssuers &&
                (e.authorityInfoAccessIssuers = t.authorityInfoAccessIssuers.bytes.toString())
            })(t)
        }
        return t
      }
      function p(e) {
        e.altNames = []
        const t = s.ASN1.fromDER(e.value).mustCompound()
        for (const r of t) {
          const t = { tag: r.tag, value: r.bytes }
          switch ((e.altNames.push(t), r.tag)) {
            case 1:
              t.email = r.bytes.toString()
              break
            case 2:
              t.dnsName = r.bytes.toString()
              break
            case 6:
              t.uri = r.bytes.toString()
              break
            case 7:
              t.ip = a.bytesToIP(r.bytes)
              break
            case 8:
              t.oid = s.ASN1.parseOID(r.bytes)
          }
        }
      }
      t.Certificate = f
      const d = {
        name: 'subjectKeyIdentifier',
        class: s.Class.UNIVERSAL,
        tag: s.Tag.OCTETSTRING,
        capture: 'subjectKeyIdentifier',
      }
      const y = {
        name: 'authorityKeyIdentifier',
        class: s.Class.UNIVERSAL,
        tag: s.Tag.SEQUENCE,
        value: [
          {
            name: 'authorityKeyIdentifier.value',
            class: s.Class.CONTEXT_SPECIFIC,
            tag: s.Tag.NONE,
            capture: 'authorityKeyIdentifier',
          },
        ],
      }
      const g = {
        name: 'authorityInfoAccess',
        class: s.Class.UNIVERSAL,
        tag: s.Tag.SEQUENCE,
        value: [
          {
            name: 'authorityInfoAccess.authorityInfoAccessOcsp',
            class: s.Class.UNIVERSAL,
            tag: s.Tag.SEQUENCE,
            optional: !0,
            value: [
              {
                name: 'authorityInfoAccess.authorityInfoAccessOcsp.oid',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.OID,
              },
              {
                name: 'authorityInfoAccess.authorityInfoAccessOcsp.value',
                class: s.Class.CONTEXT_SPECIFIC,
                tag: s.Tag.OID,
                capture: 'authorityInfoAccessOcsp',
              },
            ],
          },
          {
            name: 'authorityInfoAccess.authorityInfoAccessIssuers',
            class: s.Class.UNIVERSAL,
            tag: s.Tag.SEQUENCE,
            optional: !0,
            value: [
              {
                name: 'authorityInfoAccess.authorityInfoAccessIssuers.oid',
                class: s.Class.UNIVERSAL,
                tag: s.Tag.OID,
              },
              {
                name: 'authorityInfoAccess.authorityInfoAccessIssuers.value',
                class: s.Class.CONTEXT_SPECIFIC,
                tag: s.Tag.OID,
                capture: 'authorityInfoAccessIssuers',
              },
            ],
          },
        ],
      }
      function m(e) {
        for (const t of e) {
          if (
            ((null != t.name && '' !== t.name) ||
              (null != t.oid && (t.name = a.getOIDName(t.oid)),
              '' === t.name && null != t.shortName && (t.name = a.getOIDName(u[t.shortName]))),
            null == t.oid || '' === t.oid)
          ) {
            if ('' === t.name) throw new Error('Attribute oid not specified.')
            t.oid = a.getOID(t.name)
          }
          if (
            ((null != t.shortName && '' !== t.shortName) ||
              (t.shortName = null == u[t.name] ? '' : u[t.name]),
            null == t.value)
          )
            throw new Error('Attribute value not specified.')
        }
      }
      function b(e) {
        const t = []
        for (const n of e.mustCompound())
          for (const e of n.mustCompound()) {
            const n = e.mustCompound(),
              i = {}
            ;(i.oid = s.ASN1.parseOID(n[0].bytes)),
              (i.value = n[1].value),
              (i.valueTag = n[1].tag),
              (i.name = a.getOIDName(i.oid)),
              (i.shortName = ((r = i.name), null == u[r] ? '' : u[r])),
              t.push(i)
          }
        var r
        return t
      }
      function E(e) {
        return null == e || e instanceof Buffer || 'function' != typeof e.toJSON ? e : e.toJSON()
      }
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"alipay-sdk","version":"3.1.1","description":"蚂蚁金服开放平台 node sdk","main":"lib/alipay.js","scripts":{"tsc":"./node_modules/.bin/tsc -p ./tsconfig.json","lint":"tslint -p ./tsconfig.json --fix","lint:no-fix":"tslint -p ./tsconfig.json","test":"mocha","ci":"npm run tsc && npm run lint:no-fix && nyc mocha -t 6000"},"author":"dersoncheng","homepage":"https://github.com/ali-sdk/alipay-sdk","bugs":"https://github.com/ali-sdk/alipay-sdk/issues","license":"ISC","dependencies":{"@types/node":"^9.6.0","camelcase-keys":"^4.2.0","decamelize":"^2.0.0","is":"^3.2.1","is-json":"^2.0.1","isuri":"^2.0.3","moment":"^2.16.0","request":"^2.86.0","snakecase-keys":"^1.1.1","urllib":"^2.17.0","@fidm/x509":"^1.2.1","bignumber.js":"^9.0.0"},"nyc":{"extends":"@istanbuljs/nyc-config-typescript","include":["lib"],"extension":[".ts"],"check-coverage":true,"reporter":["text-summary","json","html"],"sourceMap":true},"ci":{"version":"8"},"typings":"lib/alipay.d.ts","devDependencies":{"@istanbuljs/nyc-config-typescript":"^0.1.3","mocha":"^3.1.2","nyc":"^14.1.1","query-string":"^6.5.0","should":"^11.1.1","sinon":"^1.17.7","tslint":"^5.8.0","tslint-config-airbnb":"^5.4.2","typescript":"^2.6.2"}}'
      )
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      var n = r(1)
      function i(e, t, r) {
        t.forEach((t) => {
          void 0 !== e[t] && (e[t] = (0, n.accMul)(Number(e[t]), r))
        })
      }
      function s(e, t) {
        t.forEach((t) => {
          void 0 !== e[t] && (e[t] = e[t].replace(/[-+:\s]/g, ''))
        })
      }
      var a = {
        unifiedOrder: {
          args: {
            _pre: (e) => (i(e, ['totalFee'], 0.01), e),
            totalAmount: 'totalFee',
            buyerId: 'openid',
          },
          returnValue: { transactionId: 'tradeNo' },
        },
        getOrderInfo: {
          args: {
            _pre: (e) => (i(e, ['totalFee'], 0.01), e),
            buyerId: 'openid',
            totalAmount: 'totalFee',
          },
          returnValue: (e) => (
            'object' == typeof e && e.qrCode && ((e.codeUrl = e.qrCode), delete e.qrCode), e
          ),
        },
        orderQuery: {
          args: { tradeNo: 'transactionId' },
          returnValue: {
            _pre: (e) => (
              i(
                e,
                [
                  'totalAmount',
                  'settleAmount',
                  'buyerPayAmount',
                  'payAmount',
                  'pointAmount',
                  'invoiceAmount',
                  'receiptAmount',
                  'chargeAmount',
                  'mdiscountAmount',
                  'discountAmount',
                ],
                100
              ),
              s(e, ['sendPayDate']),
              e
            ),
            transactionId: 'tradeNo',
            openid: 'buyerUserId',
            tradeState: function (e) {
              switch (e.tradeStatus) {
                case 'WAIT_BUYER_PAY':
                  return 'USERPAYING'
                case 'TRADE_CLOSED':
                  return 'CLOSED'
                case 'TRADE_SUCCESS':
                  return 'SUCCESS'
                case 'TRADE_FINISHED':
                  return 'FINISHED'
                default:
                  return e.tradeStatus
              }
            },
            totalFee: 'totalAmount',
            settlementTotalFee: 'settleAmount',
            feeType: 'transCurrency',
            cashFeeType: 'payCurrency',
            cashFee: 'buyerPayAmount',
            fundBillList: function (e) {
              return e.fundBillList
                ? e.fundBillList.map(
                    (e) => (
                      (e.amount = 100 * Number(e.amount)),
                      (e.realAmount = 100 * Number(e.realAmount)),
                      e
                    )
                  )
                : []
            },
            tradeSettleDetailList: function (e) {
              return e.tradeSettleDetailList
                ? e.tradeSettleDetailList.map((e) => ((e.amount = 100 * Number(e.amount)), e))
                : []
            },
            timeEnd: 'sendPayDate',
            _purify: { shouldDelete: ['tradeStatus'] },
          },
        },
        cancelOrder: {
          args: { tradeNo: 'transactionId' },
          returnValue: { transactionId: 'tradeNo' },
        },
        closeOrder: {
          args: { tradeNo: 'transactionId' },
          returnValue: { transactionId: 'tradeNo' },
        },
        refund: {
          args: {
            _pre: (e) => (i(e, ['refundFee', 'sendBackFee'], 0.01), e),
            tradeNo: 'transactionId',
            refundAmount: 'refundFee',
            outRequestNo: 'outRefundNo',
            refundCurrency: 'refundFeeType',
            refundReason: 'refundDesc',
            goodsDetail: function (e) {
              return e.goodsDetail
                ? e.goodsDetail.map((e) => ((e.price = Number(e.price) / 100), e))
                : []
            },
            refundRoyaltyParameters: function (e) {
              return e.refundRoyaltyParameters
                ? e.refundRoyaltyParameters.map((e) => ((e.amount = Number(e.amount) / 100), e))
                : []
            },
          },
          returnValue: {
            _pre: (e) => (
              i(
                e,
                [
                  'refundFee',
                  'presentRefundBuyerAmount',
                  'presentRefundDiscountAmount',
                  'presentRefundMdiscountAmount',
                ],
                100
              ),
              e
            ),
            transactionId: 'tradeNo',
            openid: 'buyerUserId',
            cashRefundFee: 'presentRefundBuyerAmount',
            refundId: 'refundSettlementId',
            cashFeeType: 'refundCurrency',
            refundDetailItemList: function (e) {
              return e.refundDetailItemList
                ? e.refundDetailItemList.map(
                    (e) => (
                      (e.amount = 100 * Number(e.amount)),
                      (e.realAmount = 100 * Number(e.realAmount)),
                      e
                    )
                  )
                : []
            },
            refundPresetPaytoolList: function (e) {
              return e.refundPresetPaytoolList
                ? e.refundPresetPaytoolList.map((e) => ((e.amount = 100 * Number(e.amount)), e))
                : []
            },
          },
        },
        refundQuery: {
          args: { tradeNo: 'transactionId', outRequestNo: 'outRefundNo' },
          returnValue: {
            _pre: (e) => (
              i(
                e,
                [
                  'totalAmount',
                  'refundAmount',
                  'sendBackFee',
                  'presentRefundBuyerAmount',
                  'presentRefundBuyerAmount',
                  'presentRefundMdiscountAmount',
                ],
                100
              ),
              e
            ),
            transactionId: 'tradeNo',
            outRefundNo: 'outRequestNo',
            totalFee: 'totalAmount',
            refundFee: 'refundAmount',
            refundDesc: 'refundReason',
            refundId: 'refundSettlementId',
            refundSuccessTime: 'gmtRefundPay',
            refundRoyaltys: function (e) {
              return e.refundRoyaltys
                ? e.refundRoyaltys.map((e) => ((e.refundAmount = 100 * Number(e.refundAmount)), e))
                : []
            },
            refundDetailItemList: function (e) {
              return e.refundDetailItemList
                ? e.refundDetailItemList.map(
                    (e) => (
                      (e.amount = 100 * Number(e.amount)),
                      (e.realAmount = 100 * Number(e.realAmount)),
                      e
                    )
                  )
                : []
            },
          },
        },
        verifyPaymentNotify: {
          returnValue: {
            _pre: (e) => (
              i(
                e,
                ['invoiceAmount', 'receiptAmount', 'buyerPayAmount', 'totalAmount', 'pointAmount'],
                100
              ),
              s(e, ['gmtPayment']),
              e
            ),
            openid: 'buyerId',
            transactionId: 'tradeNo',
            totalFee: 'totalAmount',
            cashFee: 'buyerPayAmount',
            timeEnd: 'gmtPayment',
            resultCode: function (e) {
              return e.tradeStatus.replace('TRADE_', '')
            },
            fundBillList: function (e) {
              return e.fundBillList
                ? JSON.parse(e.fundBillList).map((e) => ((e.amount = 100 * Number(e.amount)), e))
                : []
            },
          },
        },
        verifyRefundNotify: {
          returnValue: {
            _pre: (e) => (i(e, ['totalAmount', 'refundFee'], 100), e),
            openid: 'buyerId',
            outRefundNo: 'outBizNo',
            transactionId: 'tradeNo',
            totalFee: 'totalAmount',
            successTime: function (e) {
              e.successTime = e.gmtRefund.replace('+', '').split('.')[0]
            },
            resultCode: function (e) {
              return e.tradeStatus.replace('TRADE_', '')
            },
            fundBillList: function (e) {
              return e.fundBillList
                ? JSON.parse(e.fundBillList).map((e) => ((e.amount = 100 * Number(e.amount)), e))
                : []
            },
            _purify: { shouldDelete: ['gmtRefund'] },
          },
        },
      }
      ;(t.default = a), (e.exports = t.default)
    },
    function (e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0)
      ;(t.default = class {
        constructor(e) {
          e.sandbox && (e.gateway = 'https://sandbox.itunes.apple.com/verifyReceipt'),
            (e = Object.assign(
              { gateway: 'https://buy.itunes.apple.com/verifyReceipt', timeout: 5e3, password: '' },
              e
            )),
            (this.options = e)
        }
        async _request(e) {
          const t = {
              method: 'POST',
              contentType: 'json',
              dataType: 'json',
              data: e,
              timeout: this.options.timeout,
            },
            { status: r, data: n } = await uniCloud.httpclient.request(this.options.gateway, t)
          if (200 !== r) throw new Error('request fail')
          return this._parse(n)
        }
        _parse(e) {
          const t = this._tradeState(e.status)
          return 0 === e.status
            ? { transactionId: e.receipt.transaction_id, receipt: e.receipt, ...t }
            : t
        }
        _tradeState(e) {
          let t = 'PAYERROR',
            r = ''
          switch (e) {
            case -1:
              t = 'NOTPAY'
              break
            case 0:
              t = 'SUCCESS'
              break
            default:
              r = 'Error status [' + e + ']'
          }
          return { tradeState: t, errMsg: r }
        }
        async verifyReceipt(e) {
          e = { 'receipt-data': e.receiptData, password: e.password || this.options.password }
          return await this._request(e)
        }
      }),
        (e.exports = t.default)
    },
  ])
)
